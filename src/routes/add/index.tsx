import { FC, FormEvent, useEffect, useState, useRef, RefObject } from "react";
import Layout from "@/layout";

import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

import "./add.sass";
import { Hit } from "@/helpers/interfaces";
import { index } from "@/helpers/algolia";

const AddRecord: FC = () => {
  const successMessageRef: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const [newRecord, setNewRecord] = useState<Partial<Hit>>({
    name: "",
    food_type: "",
    address: "",
    city: "",
    postal_code: "",
    state: "",
    price_range: "",
    stars_count: 0,
  });

  const [isFieldMissing, setIsFieldMissing] = useState<boolean>(true);
  const [successMessage, setSuccessMessage] = useState<string>("");

  function getFieldValue(event: FormEvent): void {
    const { name, value } = event.target as HTMLInputElement;

    setNewRecord((prevState) => ({ ...prevState, [name]: value }));
    setSuccessMessage("");
  }

  function getRatingValue({ rating }: { rating: any }): void {
    setNewRecord((prevState) => ({ ...prevState, stars_count: rating }));
    setSuccessMessage("");
  }

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();

    if (!isFieldMissing) {
      setNewRecord((prevState) => ({
        ...prevState,
        price:
          newRecord.price_range === "$30 and under"
            ? 2
            : newRecord.price_range === "$31 to $50"
            ? 3
            : 4,
      }));

      index
        .saveObject(
          { ...newRecord, reviews_count: 0 },
          { autoGenerateObjectIDIfNotExist: true }
        )
        .then(() => {
          setSuccessMessage("Your restaurant has been saved!");

          setNewRecord({
            name: "",
            food_type: "",
            address: "",
            city: "",
            postal_code: "",
            state: "",
            price_range: "",
            stars_count: 0,
          });
        });
    }
  }

  useEffect(() => {
    setIsFieldMissing(
      Object.values(newRecord).some((value) => value === "" || value === 0)
    );
  }, [newRecord, isFieldMissing]);

  return (
    <Layout>
      <div className="add">
        <h1>Add a new restaurant</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={newRecord.name}
              onChange={getFieldValue}
            ></input>
          </label>

          <label>
            <span>Cuisine</span>
            <input
              name="food_type"
              value={newRecord.food_type}
              onChange={getFieldValue}
            ></input>
          </label>

          <label>
            <span>Address</span>
            <input
              name="address"
              value={newRecord.address}
              onChange={getFieldValue}
            ></input>
          </label>

          <label>
            <span>City</span>
            <input
              name="city"
              value={newRecord.city}
              onChange={getFieldValue}
            ></input>
          </label>

          <label>
            <span>Postal code</span>
            <input
              name="postal_code"
              value={newRecord.postal_code}
              onChange={getFieldValue}
            ></input>
          </label>

          <label>
            <span>State</span>
            <input
              name="state"
              value={newRecord.state}
              onChange={getFieldValue}
            ></input>
          </label>

          <label>
            <span>Price range</span>
            <select
              name="price_range"
              value={newRecord.price_range}
              onChange={getFieldValue}
            >
              <option value="">--Please select a range--</option>
              <option value="$30 and under">$30 and under</option>
              <option value="$31 to $50">$31 to $50</option>
              <option value="$50 and over">$50 and over</option>
            </select>
          </label>

          <label>
            <span>Stars</span>
            <Rater
              total={5}
              rating={newRecord.stars_count}
              onRate={getRatingValue}
            />
          </label>

          {successMessage && (
            <p className="success-message" ref={successMessageRef}>
              {successMessage}
            </p>
          )}

          <button
            className="submit-button"
            type="submit"
            disabled={isFieldMissing}
          >
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddRecord;
