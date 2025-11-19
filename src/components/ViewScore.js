import React, { useState, useEffect } from 'react';
import { GetScore } from "../apis/api";
import { useParams } from 'react-router-dom';

const ViewScore = () => {

    const { id } = useParams();
    const [score, setScore] = useState(null);

    useEffect(() => {
        GetScore(id).then((response) => {
            setScore(response.data.score);
        })
        .catch((err) => {});
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg border-0 p-4 rounded-4" style={{ width: "420px" }}>
                <h3 className="text-center fw-bold mb-4">User Score</h3>

                {!score ? (
                    <div className="text-center fs-5 fw-semibold text-muted py-4">
                        No Score Added
                    </div>
                ) : (
                    <div>
                        <h4 className="fw-bold text-center mb-3">{score?.userId?.name}</h4>

                        <div className="d-flex justify-content-between border-bottom py-2">
                            <span className="fw-semibold">Basic Verification</span>
                            <span>{score.basicVerification}</span>
                        </div>

                        <div className="d-flex justify-content-between border-bottom py-2">
                            <span className="fw-semibold">Background Check</span>
                            <span>{score.backgroundCheck}</span>
                        </div>

                        <div className="d-flex justify-content-between border-bottom py-2">
                            <span className="fw-semibold">Experience</span>
                            <span>{score.experince}</span>
                        </div>

                        <div className="d-flex justify-content-between border-bottom py-2">
                            <span className="fw-semibold">Positive Behavior</span>
                            <span>{score.postiveBehavior}</span>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default ViewScore
