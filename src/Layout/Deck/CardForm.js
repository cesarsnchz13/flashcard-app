import React from "react";
import { useHistory } from "react-router-dom";

function CardForm({ formData, handleChange, handleSubmit }) {
  const history = useHistory();
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            type="text"
            className="form-control"
            name="front"
            id="front"
            placeholder="Front of card"
            value={formData.front}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Description</label>
          <textarea
            type="text"
            className="form-control"
            name="back"
            id="back"
            placeholder="Back of card"
            value={formData.back}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="column">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => history.goBack()}
            >
              Done
            </button>
            <div className="column">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default CardForm;
