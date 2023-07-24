import React from "react";
import cardData from "./cardData";

function Section(props) {
    return (
        <>
            {/* // <!-- Section--> */}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {cardData.map((card, index) => (
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {card.sale ? (
                                        <div
                                            className="badge bg-dark text-white position-absolute"
                                            style={{ top: "0.5rem", right: "0.5rem" }}
                                        >
                                            Sale
                                        </div>
                                    ) : (
                                        <></>
                                    )}

                                    <img
                                        className="card-img-top"
                                        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                        alt="..."
                                    />

                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{card.product}</h5>
                                            {card.rated ? (
                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                            {card.sale ? (
                                                <span className="text-muted text-decoration-line-through">
                                                    {card.salePrice}
                                                </span>
                                            ) : (
                                                <></>
                                            )}
                                            {card.price}
                                        </div>
                                    </div>

                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <button
                                                id={index}
                                                onClick={
                                                    !card.cart
                                                        ? props.handleIncreament
                                                        : props.handleDecreament
                                                }
                                                className={
                                                    !card.cart
                                                        ? "btn btn-outline-dark mt-auto"
                                                        : "btn btn-outline-danger mt-auto"
                                                }
                                            >
                                                {!card.cart ? "Add to cart" : "Remove from cart"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section;