//libraries
import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";

//components
import Table from "../components/table/Table";

//data
const headers = [
  { id: 2, label: "نام انگلیسی", sort: false },
  { id: 1, label: "نام فارسی", sort: true },
];

const bodyList: any = [
  { id: 1, en_Name: "samsung", fa_Name: "سامسونگ" },
  { id: 2, en_Name: "apple", fa_Name: "اپل" },
  { id: 3, en_Name: "xiomi", fa_Name: "شیایومی" },
  { id: 4, en_Name: "howawi", fa_Name: "هووای" },
  {
    id: 5,
    en_Name: "samsung",
    fa_Name: [
      "سامسونگ",
      { name: "اسم", phone: "a53" },
      { name: "اسم", phone: "a52" },
      { name: "اسم", phone: "a51" },
      { name: "اسم", phone: "a50" },
    ],
  },
  { id: 6, en_Name: "apple", fa_Name: "اپل" },
  { id: 7, en_Name: "xiomi", fa_Name: "شیایومی" },
  { id: 8, en_Name: "howawi", fa_Name: "هووای" },
  { id: 9, en_Name: "samsung", fa_Name: "سامسونگ" },
  { id: 10, en_Name: "apple", fa_Name: "اپل" },
];

const IndexPage: NextPage = () => {
  //instance
  const [search, setSearch] = useState("");
  const [editItem, setEditItem] = useState("");
  const [deleteItem, setDeleteItem] = useState("");
  const [sort, setSort] = useState({ label: "", sorting: "" });
  return (
    <div className="">
      <Head>
        <title>table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Table
        sort={sort}
        total={100}
        pageSize={20}
        search={search}
        headers={headers}
        setSort={setSort}
        bodyList={bodyList}
        handleDelete={(e) => {
          setDeleteItem(e);
        }}
        handleEdit={(e) => {
          setEditItem(e);
        }}
        handleSearch={(e) => {
          setSearch(e);
        }}
      />
    </div>
  );
};

export default IndexPage;
