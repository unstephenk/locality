import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStreetView} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

export const Jumbotron = () => {
    return (
        <div className="container my-5">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center text-center">
                        <div className={styles.jumbotronIconContainer}>
                            <FontAwesomeIcon icon={faStreetView} color={"black"}/>
                        </div>
                    </div>
                </div>

                <h1 className="text-body-emphasis">Welcome to Locality</h1>
                <p className="col-lg-8 mx-auto fs-5 text-muted">
                    I don't exactly know what I am yet, but thank you for visiting
                </p>
                <div className="d-inline-flex gap-2 mb-5">
                    <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                        Call to action
                    </button>
                    <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                        Secondary link
                    </button>
                </div>
            </div>
        </div>
    )
}