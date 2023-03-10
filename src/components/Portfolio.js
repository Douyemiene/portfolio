import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-halves s-bgrid-thirds x"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <a className="columns portfolio-item">
                      <div className="item-wrap">
                        <a>
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div
                              className="portfolio-item-meta"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                              }}
                            >
                              <div>
                                <h5>{item.name}</h5>
                                <div style={{ display: "flex" }}>
                                  <a
                                    href={`${item.github}`}
                                    style={{
                                      background: "#CC5200",
                                      width: "60px",
                                      color: "white",
                                      textSize: "13px",
                                      padding: "5px 5px",
                                      borderRadius: "7px",
                                      fontWeight: "bolder",
                                      textAlign: "center",
                                      marginRight: "20px",
                                    }}
                                  >
                                    Github
                                  </a>
                                  <a
                                    href={`${item.url}`}
                                    style={{
                                      background: "#CC5200",
                                      width: "60px",
                                      color: "white",
                                      textSize: "13px",
                                      padding: "5px 5px",
                                      borderRadius: "7px",
                                      fontWeight: "bolder",
                                      textAlign: "center",
                                    }}
                                  >
                                    LIVE
                                  </a>
                                </div>
                                {/* <p>{item.description}</p> */}
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
