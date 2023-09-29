import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import fruits from "../../data/fruits.json"
import CaesarTable from "../../components/CaesarTable/CaesarTable"

function CaesarFruitLevelTwoScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={fruits} levelChoice={2}/>
                <CaesarTable defaultRotation={0} keepClosed={0}/>
            </div>
        </div>
    );
}

export default CaesarFruitLevelTwoScreen;