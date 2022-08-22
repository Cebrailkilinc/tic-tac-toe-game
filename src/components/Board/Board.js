import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Box from "../Box/Box"
import "./board.css"

function Board() {

    const [state, setState] = useState(Array(9).fill(null))
    const [isTurn, setIsTurn] = useState(true)
    const [sound, setSound] = useState("sound2.mp3")
    const [active, setActive] = useState("")




    //Sound_Effect
    const audio = new Audio(sound)

    const start = () => {
        audio.play()
    }


    // Winner_Controll
    const checkWinnerControll = () => {
        const winnerNumber = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let index of winnerNumber) {
            const [a, b, c] = index;
            if (state[a] === state[b] && state[a] === state[c] && state[b] === state[c]) {
                return state[a]
            }

        }
    }

    // Winner_Controll_Run
    let isWinner = checkWinnerControll()
    const handleClick = (index) => {
        const otherState = [...state]
        otherState[index] = isTurn ? "O" : "X";
        setState(otherState)
        setIsTurn(!isTurn)
        start()
    }

    //Try_Again_Function
    const handleTryAgain = () => {
        setState(Array(9).fill(null))
        setActive("")

    }


    useEffect(() => {
        if (isTurn === true) {
            setSound("sound2.mp3")
        } else {
            setSound("sound1.mp3")
        }


        if (isWinner === "X" || isWinner === "O") {
            setActive("visibility")
        }
    }, [isTurn])


    let nullSize = 0;

    for (let index = 0; index < 9; index++) {
        const element = state[index];

        if (element === "X" || element === "O") {
            nullSize++
        }
    }

    if (nullSize === 9 && isWinner !== "X" && isWinner !== "O") {
        isWinner = "Berabere"
    }

    return (
        <div className='container' >
            <div className='table-mobile'>
                <h3>TIC TAC TOE </h3>
                <span className='winner-head-mobile'>KAZANAN:</span>
                <span className='winner-mobile'>{isWinner}</span>
            </div>
            <div id='game' >
                <div className='row'>
                    <Box onClick={() => { handleClick(0) }} state={state[0]} active={active} />
                    <Box onClick={() => { handleClick(1) }} state={state[1]} active={active} />
                    <Box onClick={() => { handleClick(2) }} state={state[2]} active={active} />
                </div>
                <div className='row'>
                    <Box onClick={() => { handleClick(3) }} state={state[3]} active={active} />
                    <Box onClick={() => { handleClick(4) }} state={state[4]} active={active} />
                    <Box onClick={() => { handleClick(5) }} state={state[5]} active={active} />
                </div>
                <div className='row'>
                    <Box onClick={() => { handleClick(6) }} state={state[6]} active={active} />
                    <Box onClick={() => { handleClick(7) }} state={state[7]} active={active} />
                    <Box onClick={() => { handleClick(8) }} state={state[8]} active={active} />
                </div>
                <div className='table'>
                    <h1>TIC TAC TOE</h1>
                    <span className='winner-head'>KAZANAN</span>
                    <span className='winner'>{isWinner}</span>
                    <button className='restart-button' onClick={handleTryAgain} >TRY AGAIN</button>
                </div>
                <button className='restart-button-mobile' onClick={handleTryAgain} >TRY AGAIN</button>
            </div>
        </div>
    )
}

export default Board