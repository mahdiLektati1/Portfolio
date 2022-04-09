import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import {MainLayout, InnerLayout} from '../styles/Layouts';

function BlogsPage() {
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    return (
        <MainLayout>
            <GameStyled>
            <Title title={'Amusons-Nous'} span={'Amusons-Nous'} />
                <InnerLayout className={'game'}>
                    <div className='quiz-section'>
                        {showScore ? (
                            <div className='score-section'>
                                You scored {score} out of {questions.length}
                            </div>
                        ) : (
                            <>
                                <div className='question-section'>
                                    <div className='question-count'>
                                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                                    </div>
                                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                                </div>
                                <div className='answer-section'>
                                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                                        <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </InnerLayout>
            </GameStyled>
        </MainLayout>
    )
}

const GameStyled = styled.div`
    .game{
        display: flex;
        align-items: center;
        justify-content: center;

        .quiz-section {
            background-color: #252d4a;
            width: 70%;
            min-height: 250px;
            height: min-content;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            justify-content: space-evenly;

            .score-section {
                display: flex;
                font-size: 24px;
                align-items: center;
                color: aqua;
            }

            /* QUESTION/TIMER/LEFT SECTION */
            .question-section {
                width: 100%;
                position: relative;
                color: burlywood;
            }

            .question-count {
                margin-bottom: 20px;
            }

            .question-count span {
                font-size: 28px;
            }

            .question-text {
                margin-bottom: 12px;
                width: 90%;
            }

            .timer-text {
                background: rgb(230, 153, 12);
                padding: 15px;
                margin-top: 20px;
                margin-right: 20px;
                border: 5px solid rgb(255, 189, 67);
                border-radius: 15px;
                text-align: center;
            }

            /* ANSWERS/RIGHT SECTION */
            .answer-section {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            button {
                width: 100%;
                font-size: 16px;
                color: #ffffff;
                background-color: #252d4a;
                border-radius: 15px;
                display: flex;
                padding: 6px;
                justify-content: flex-start;
                align-items: center;
                border: 4px solid #234668;
                cursor: pointer;

                margin-bottom: 15px;
                text-align: center;
                display:table-cell;
                vertical-align:middle;
            }

            .correct {
                background-color: #2f922f;
            }

            .incorrect {
                background-color: #ff3333;
            }

            button:hover {
                background-color: #555e7d;
            }

            button:focus {
                outline: none;
            }

            button svg {
                margin-right: 5px;
            }
        }
    }
`;

export default BlogsPage
