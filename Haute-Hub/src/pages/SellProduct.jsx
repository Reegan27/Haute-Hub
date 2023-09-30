import React, { useState } from "react";
import "../styles/SellProduct.css";
import storage from "../configs/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const SellProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState();
  const [progressPercent, setProgressPercent] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addProduct = async () => {
    await fetch("http://localhost:3001/api/product", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        desc,
        price,
        imgUrl,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  };

  const uploadImage = async () => {
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadUrl) => {
            setImgUrl(downloadUrl);
            console.log(imgUrl);
          })
          .then(() => {
            addProduct();
          });
      }
    );
  };

  return (
    <div className="sellProduct">
      <div className="formDiv">
        <div className={`products ${name.length > 0 ? "active" : ""}`}>
          <input
            type="text"
            onChange={(text) => setName(text.target.value)}
            value={name}
          />
          <label>Name</label>
        </div>
        <div className={`products ${price.length > 0 ? "active" : ""}`}>
          <input
            type="text"
            onChange={(text) => setPrice(text.target.value)}
            value={price}
          />
          <label>Price</label>
        </div>
        <div className={`products ${desc.length > 0 ? "active" : ""}`}>
          <input
            type="text"
            onChange={(text) => setDesc(text.target.value)}
            value={desc}
          />
          <label>Description</label>
        </div>
        <div className="productImg">
          <input
            type="file"
            accept="image/*"
            className="productImg"
            onChange={handleFile}
          />
        </div>
        <button className="addProduct" onClick={uploadImage}>
          Add
        </button>
      </div>
    </div>
  );
};

export default SellProduct;
