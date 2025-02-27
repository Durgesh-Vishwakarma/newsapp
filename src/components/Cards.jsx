import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Img from "../Asset/oops.png";
import Loader from "./Loader";


const Cards = ({ heading, category, country, pagesize }) => {
  const [api, setApi] = useState(null);
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState();
  const [loader, setLoader] = useState();

  useEffect(() => {
    setLoader(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=921db66a76ab4bb4a05dee3d5c030ae4&page=3&pageSize=${pagesize}`
    )
      .then((response) => response.json())
      .then((data) => {
        setApi(data.articles);
        setPageTotal(data.totalResults);
        setLoader(false);
      })
      .catch((error) => console.log(error));
  }, [heading, country, category, pagesize, pageTotal]);
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=921db66a76ab4bb4a05dee3d5c030ae4
  const handlePrevClick = async () => {
    setLoader(true);
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=921db66a76ab4bb4a05dee3d5c030ae4&page=${
        page - 1
      }&pageSize=${pagesize}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles);
        setApi(data.articles);
        setPage(page - 1);

        setLoader(false);
      })
      .catch((error) => console.log(error));
  };

  const handleNextClick = async () => {
    setLoader(true);
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=921db66a76ab4bb4a05dee3d5c030ae4&page=${
        page + 1
      }&pageSize=${pagesize}`
    )
      .then((response) => response.json())
      .then((data) => {
        setApi(data.articles);
        setPage(page + 1);
        setLoader(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container>
        <h1>{`Top Heading on ${heading}`}</h1>
        {loader && <Loader />}
        <div className="boxContainer">
          {api &&
            !loader &&
            api.map((ele) => {
              return (
                <div className="cards" key={ele.url}>
                  <img src={!ele.urlToImage ? Img : ele.urlToImage} alt="img" />
                  <p className="p2">{ele.source.name}</p>
                  <h5>{ele.title ? ele.title : ""}</h5>
                  <p className="p1">
                    {ele.description
                      ? ele.description.substring(0, 100) + "..."
                      : " "}
                  </p>
                  <p className="p3">
                    By {!ele.author ? "Unknown" : ele.author} on{" "}
                    {new Date(ele.publishedAt).toGMTString()}
                  </p>
                  <a href={ele.url} className="btn">
                    Readmore
                  </a>
                </div>
              );
            })}
        </div>

        {!loader && (
          <div className="button">
            <button
              className="btnn"
              disabled={page <= 1}
              onClick={handlePrevClick}
            >
              &#8249; Previous
            </button>
            <button
              className="btnn"
              disabled={page + 1 > Math.ceil(pageTotal / pagesize)}
              onClick={handleNextClick}
            >
              Next &#8250;
            </button>
          </div>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 5px 9%;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    padding-bottom: 15px;
    color: #fff;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    font-size: 50px;
    color: black;
  }
  .boxContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px;

    .cards {
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      background: #fff;
      text-align: center;
      padding: 15px 10px;

      img {
        display: block;
        width: 100%;
        height: 13rem;
        object-fit: fill;
        border-radius: 5px;
      }
      h5 {
        color: #444;
        font-size: 21px;
        padding: 0px 0;

        text-align: justify;
        line-height: 1.6rem;
        word-spacing: 0rem;
      }
      .p1 {
        color: #777;
        font-size: 15px;
        line-height: 1.8;
        text-align: justify;

        line-height: 1.6rem;
        word-spacing: 0rem;
      }
      .p2 {
        color: #777;
        font-size: 15px;
        line-height: 1.8;
        text-align: justify;
        color: red;
        line-height: 1.6rem;
        word-spacing: 0rem;
      }
      .p3 {
        color: #777;
        font-size: 15px;
        line-height: 1.8;
        text-align: justify;
        color: red;
        line-height: 1.6rem;
        word-spacing: 0rem;
      }
      .btn {
        margin-top: 10px;
        display: inline-block;
        background: #333;
        color: #fff;
        font-size: 17px;
        border-radius: 5px;
        padding: 8px 25px;

        &:hover {
          letter-spacing: 1px;
          color: red;
        }
      }

      &:hover {
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
        transform: scale(1.03);
      }
    }
  }

  .button {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }
  .btnn {
    color: white;
    background-color: green;
    columns: #ffff;
    border-radius: 6px;
    cursor: pointer;
    padding: 8px 30px;
    margin: 5px;
    margin-top: 10px;
    font-size: large;

    &:hover {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
      transform: scale(1.03);
      font-size: larger;
    }
  }
`;

export default Cards;
