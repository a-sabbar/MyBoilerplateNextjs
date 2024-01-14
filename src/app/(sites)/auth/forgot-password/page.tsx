'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ChangePassword = () => {
  const onSubmit = (e:any) => {
    e.preventDefault();
    console.log('submit');
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/" className="flex items-end mb-6 gap-2 text-4xl font-semibold text-gray-900 dark:text-white">
            <Image 
              width={100}
              height={100}
            className="w-10 h-10 mb-1" src="/Mylogo.svg" alt="logo" />
            Achraf Sabbar
        </Link>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Forgot your password? 
          </h2>
          <p className="mb-4 text-sm font-medium text-gray-500 dark:text-white">
         {` Don't fret! Just type in your email and we will send you a code to reset your password! `}
          </p>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={onSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" />
              </div>
            <button
              type="submit"
              className="bg-black w-full text-white bg-primary-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600  "
            >
              Send Code
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
