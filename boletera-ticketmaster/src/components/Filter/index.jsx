import { useState } from "react";

const FilterComponent = () => {
  const [showList, setShowList] = useState(false);

  const handleFilterClick = () => {
    setShowList(!showList)
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowList(false);
    }, 100);
  };

  return (
    <div style={{
      gridArea: "filter",
      position: "relative",
      marginLeft: "auto",
      width: "100%"
    }}>
      <button 
        type="button" 
        style={{
        color: "rgb(255, 255, 255)",
        textDecoration: "none",
        width: "100%",
        marginLeft: "auto",
        border: "1px solid rgb(255, 255, 255)",
        padding: "3px 9px",
        borderRadius: "12px",
        cursor: "pointer",
        fontSize: "15px",
        }}
        onClick={handleFilterClick}
        onBlur={handleBlur}
      >
        <span style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img src="/src/assets/filter.svg" alt="filter" />
          <span>Filtrar</span>
        </span>
      </button>

        <div style={{
          position: "absolute",
          border: "solid",
          textAlign: "left",
          width: "auto",
          backgroundColor: "#242424",
          borderRadius: "12px",
          transition: "opacity 0.2s, visibility 0.3s",
          opacity: showList ? 1 : 0,
          visibility: showList ? "visible" : "hidden"
        }}>
          <ul style={{
            margin: "0",
            listStyle: "none",
            padding: "9px",
            display: "flex",
            flexDirection: "column",
            gap: "9px"
          }}>
            <li style={{
              cursor: "pointer",
              width: "fit-content"
            }}
            onClick={() => alert("Not available")}
            >Classification</li>
            <li style={{
              cursor: "pointer",
              width: "fit-content"
            }}
            onClick={() => alert("Not available")}
            >Country</li>
            <li style={{
              cursor: "pointer",
              width: "fit-content"
            }}
            onClick={() => alert("Not available")}
            >Type</li>
            <li style={{
              cursor: "pointer",
              width: "fit-content"
            }}
            onClick={() => alert("Not available")}
            >Address</li>
          </ul>
        </div>
    </div>
  );
};

export default FilterComponent;