import { useState } from "react";
const SlopeCalculator = () => {
  const [degree, setDegree] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [ratio, setRatio] = useState(0);
  const [unitSelector, setUnitSelector] = useState("degree");
  const [lastValue, setLastValue] = useState("");

  const getTanFromDegrees = (degrees) => {
    return Math.tan((degrees * Math.PI) / 180);
  };

  const getArcTanFromPerc = (perc) => {
    return (Math.atan(perc / 100) * 180) / Math.PI;
  };

  const handleInputChange = (value) => {
    setLastValue(value);
    if (unitSelector == "percentage") {
      if (value == "") {
        setPercentage(0);
        setRatio(0);
        setDegree(0);
      } else {
        setPercentage(value.toString() + "%");
        setRatio("1:" + (100 / value).toFixed(2).toString());
        setDegree(getArcTanFromPerc(value).toFixed(2).toString() + "°");
      }
    } else if (unitSelector == "degree") {
      if (value == "") {
        setPercentage(0);
        setRatio(0);
        setDegree(0);
      } else {
        setPercentage(
          (getTanFromDegrees(value) * 100).toFixed(2).toString() + "%"
        );
        setDegree(value.toString() + "°");
        setRatio(
          "1:" + (100 / (getTanFromDegrees(value) * 100)).toFixed(2).toString()
        );
      }
    } else if (unitSelector == "ratio") {
      if (value == "") {
        setPercentage(0);
        setRatio(0);
        setDegree(0);
      } else {
        setPercentage(((1 / value) * 100).toFixed(2).toString() + "%");
        setDegree(
          getArcTanFromPerc((1 / value) * 100)
            .toFixed(2)
            .toString() + "°"
        );
        setRatio("1:" + value.toString());
      }
    }
  };
  const handleUnitSelectorChange = (event) => {
    setUnitSelector(event.target.value);
    const value = lastValue;
    if (event.target.value == "percentage") {
      if (value == "") {
        setPercentage(0);
        setRatio(0);
        setDegree(0);
      } else {
        setPercentage(value.toString() + "%");
        setRatio("1:" + (100 / value).toFixed(2).toString());
        setDegree(getArcTanFromPerc(value).toFixed(2).toString() + "°");
      }
    } else if (event.target.value == "degree") {
      if (value == "") {
        setPercentage(0);
        setRatio(0);
        setDegree(0);
      } else {
        setPercentage(
          (getTanFromDegrees(value) * 100).toFixed(2).toString() + "%"
        );
        setDegree(value.toString() + "°");
        setRatio(
          "1:" + (100 / (getTanFromDegrees(value) * 100)).toFixed(2).toString()
        );
      }
    } else if (event.target.value == "ratio") {
      if (value == "") {
        setPercentage(0);
        setRatio(0);
        setDegree(0);
      } else {
        setPercentage(((1 / value) * 100).toFixed(2).toString() + "%");
        setDegree(
          getArcTanFromPerc((1 / value) * 100)
            .toFixed(2)
            .toString() + "°"
        );
        setRatio("1:" + value.toString());
      }
    }
  };
  return (
    <div
      style={{
        width: "70vw",
        height: "80vh",
        backgroundColor: "white",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",

        borderRadius: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Kattokaltevuuslaskuri
      </h1>
      <div
        style={{
          height: "80%",
          width: "80%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              minWidth: "30px",
              width: "25vw",
              height: "12vw",
              backgroundImage:
                "linear-gradient(to right, #fbca6c, #fb6c6c, #d75050)",
              clipPath: "polygon(0% 0, 100% 100%, 0 100%)",
            }}
          ></div>
          <div
            style={{
              display: "flex",

              justifyContent: "flex-end",
              justifyItems: "flex-end",
              flexDirection: "column",
              marginLeft: 10,
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ position: "relative" }}>
                {unitSelector === "ratio" && (
                  <span
                    style={{
                      position: "absolute",
                      left: "8px",
                      top: 4,
                      color: "gray",
                    }}
                  >
                    {"1: "}
                  </span>
                )}
                <input
                  style={{
                    width: 50,
                    height: 30,
                    borderWidth: 0,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    paddingLeft: 20,
                    fontSize: 15,
                  }}
                  onChange={(e) => {
                    handleInputChange(e.target.value);
                  }}
                ></input>
              </div>
              <select
                value={unitSelector}
                onChange={handleUnitSelectorChange}
                style={{
                  backgroundColor: "white",
                  borderWidth: 0,
                  marginLeft: 0,
                  height: 32,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                  marginLeft: 1,
                }}
              >
                <option value="degree">°</option>
                <option value="ratio">Suhde</option>
                <option value="percentage">%</option>
              </select>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p style={{ fontWeight: "bold", marginLeft: 5 }}>
            Lasket{" "}
            {unitSelector == "degree"
              ? "asteilla"
              : unitSelector == "ratio"
              ? "kattokaltevuudella"
              : "prosenteilla"}
            !
          </p>
        </div>
        <div
          style={{
            fontSize: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p> Kaltevuus asteissa: </p>
          <p style={{ fontWeight: "bold", marginLeft: 5 }}> {degree}</p>
        </div>
        <div
          style={{
            fontSize: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p> Kattokaltevuus: </p>
          <p style={{ fontWeight: "bold", marginLeft: 5 }}> {ratio}</p>
        </div>
        <div
          style={{
            fontSize: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p> Kaltevuus prosenteissa: </p>
          <p style={{ fontWeight: "bold", marginLeft: 5 }}> {percentage}</p>
        </div>
      </div>
    </div>
  );
};

export default SlopeCalculator;
