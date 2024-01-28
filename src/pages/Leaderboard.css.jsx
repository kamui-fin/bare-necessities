import React from 'react';

const LeaderboardCSS = () => (
  <style>
    {`
      .background {
        width: 100%;
        background-color: #fff;
      }

      .leaderboard {
        max-width: 600px;
        width: 100%;
        border-radius: 13px;
        margin-top: 50px;
      }

      hr {
        width: 100%;
        border: .5px solid #ececec;
      }

      .leaderboard header {
        --start: 15%;
        height: 130px;
        background-image: repeating-radial-gradient(circle at var(--start), transparent 0%, transparent 10%, rgba(54, 89, 219, 0.33) 10%, #3659db54 17%), linear-gradient(to right, #5b7cfa, #3659db);
        color: #fff;
        position: relative;
        border-radius: 12px 12px 0 0;
        overflow: hidden;
      }

      .leaderboard header .leaderboard__title {
        position: absolute;
        z-index: 2;
        top: 50%;
        right: calc(var(--start) * .75);
        transform: translateY(-50%);
        text-transform: uppercase;
        margin: 0;
      }

      .leaderboard header .leaderboard__title span {
        display: block;
      }
      .leaderboard header .leaderboard__title--top {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 6.5px;
      }
      .leaderboard header .leaderboard__title--bottom {
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 3.55px;
        opacity: 0.65;
        transform: translateY(-2px);
      }
      .leaderboard header .leaderboard__icon {
        fill: #fff;
        opacity: 0.35;
        width: 50px;
        position: absolute;
        top: 50%;
        left: var(--start);
        transform: translate(-50%, -50%);
      }
      .leaderboard__profiles {
        background-color: #fff;
        border-radius: 0 0 12px 12px;
        padding: 15px 15px 20px;
        display: grid;
        row-gap: 12px;
      }
      .rank{
        font-size: 30px;
        color: #000000;
      }
      .space_types{
        font-size:15px;
        font-weight: bold;
        display: grid;
        grid-template-columns: 1fr  1fr 2.8fr 1fr;
        padding: 5px;
        padding-left: 20px;
        background-color:#fff;
        padding-right: 25px;
        
      }
    
      .leaderboard__profile {
        display: grid;
        grid-template-columns: 1fr 1fr 3fr 1fr;
        align-items: center;
        padding: 10px 30px 10px 10px;
        overflow: hidden;
        border-radius: 10px;
        /*-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);*/
        cursor: pointer;
        transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)/*, box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)*/;
        background-color: #fff;
      }
      .leaderboard__profile:hover {
        transform: scale(1.05);
        /*box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);*/
      }
      a{
        text-decoration: none;
        
      }
      .leaderboard__picture {
        max-width: 100%;
        width: 50px;
        border-radius: 50%;
        box-shadow: 0 0 0 10px #ebeef3, 0 0 0 22px #f3f4f6;
      }
      .leaderboard__name {
        color: #979cb0;
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 0.64px;
        margin-left: 12px;
      }
      .leaderboard__value {
        color: #35d8ac;
        font-weight: 700;
        font-size: 34px;
        text-align: right;
      }
      .leaderboard__value > span {
        opacity: 0.8;
        font-weight: 600;
        font-size: 13px;
        margin-left: 3px;
      }
      body {
        margin: 0;
        background-color: #eaeaea;
        display: grid;
        height: 100vh;
        place-items: center;
        font-family: 'Inter', sans-serif;
      }
      
      
      /*.leaderboard {
        box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.4);
      }*/
        
    `}
  </style>
);

export default LeaderboardCSS;
