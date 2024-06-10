import { useState } from "react";

function WebDevelopment({ data }) {
  return (
    <>
      <div className="container">
        <h1 className="my-4">Web Development</h1>
        <div className="row">
          {data.map((e) => {
            if (e.course === "Web Development") {
              return (
                <div className="col-lg-4 col-sm-6 mb-4">
                  <div className="card h-100">
                    <a href="#">
                      <img className="card-img-top" src={e.image} alt="" />
                    </a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">{e.title}</a>
                      </h4>
                      <div className="text-muted mt-2 mb-2 w-100">
                        <i className="bi bi-clock-history"></i>
                        &nbsp;
                        <p className="d-inline mr-2">{e.hour} Hrs</p>
                        &nbsp;
                        <i className="bi bi-globe"></i>
                        &nbsp;
                        <p className="d-inline language mr-2">{e.language}</p>
                        &nbsp;
                        <i className="bi bi-people"></i>
                        &nbsp;
                        <p className="d-inline">{e.endrolled} Enrolled</p>
                        &nbsp;
                      </div>
                      <div className="d-flex justify-content-start">
                        <div className="font-weight-normal pt-1">
                          <div className="d-flex">
                            <i class="bi bi-currency-rupee"></i>
                            &nbsp;
                            <span className="d-flex align-items-center font-weight-bold offerPrice price">
                              {e.price}
                            </span>
                            &nbsp;
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default WebDevelopment;
