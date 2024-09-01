import React, { Fragment } from 'react';
import getConfig from 'next/config'
import Link from 'next/link';
import { Footer } from '../components/Footer';
import {  SEO } from '../config/config';
import { Header } from '../components/Header';

const { publicRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
     
    </Fragment>
  );
}


function Button({ title, link }) {
  return (
    <div className="row justify-content-center">
      <div className="card card-work mx-sm-4 my-2" style={{ width: "20rem" }}>
        <Link href={link}>
          <a target="_blank" rel="noreferrer">
            <h4 className="text-primary py-3 px-3">{title}</h4>
          </a>
        </Link>
      </div>
    </div>
  );
}