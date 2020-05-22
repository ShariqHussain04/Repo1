import React, { Component } from 'react'


  export async function postData(url = '', data = {}) {
  // Default options are marked with *

  console.log('Post Data UR --->>>',url);
  console.log('Post Data --->>',data);
  try {
    const res = await fetch(url, {
      method: 'POST', // *GET, POST,  PUT, DELETE, etc.
      //   mode: 'cors', // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //   redirect: 'follow', // manual, *follow, error
      //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    let result = await res.json();
    console.log('Post Request'+ result);
    return result; // parses JSON response into native JavaScript objects

  } catch (error) {
    console.log('Error' + error);
    throw error;
  }
    
}


export async function getData(url = '') {
  try {
    // Default options are marked with *
  const res = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Accept': 'application/json',
        'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //   redirect: 'follow', // manual, *follow, error
    //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  let result = await res.json();
  console.log('Get Request'+ result);
  return result; // parses JSON response into native JavaScript objects
  } 
  catch (error) {
    throw error;
    
    
  }
  
}

