import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404Page from '../pages/Error404Page'
import LessonPlanner from '../components/LessonPlanner.jsx';
import QuizUI from '../components/QuizUI.jsx';
import MainPlanner from '../components/MainPlanner.jsx';
import WorkBook from '../components/WorkBook.jsx';
import WorkSheet from '../components/WorkSheet.jsx';
import GetStarted from '../components/GetStarted.jsx';
import Vocabulary from '../components/Learning/Vocabulary.jsx'
import ComingSoon from '../pages/ComingSoon.jsx'
import ReactGA from 'react-ga4';

export default function RoutingConfig() {
  ReactGA.initialize('G-TBNNYXX21K');
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GetStarted/>}></Route>
                <Route path="/MainPlanner" element={<MainPlanner/>}></Route>
                <Route path="/LessonPlanner" element={<LessonPlanner/>}></Route>
                <Route path="/quiz-generator" element={<QuizUI/>}></Route>
                <Route path="/workbook" element={<WorkBook/>}></Route>
                <Route path="/worksheet" element={<WorkSheet/>}></Route>
                <Route path="/Vocabulary" element={<Vocabulary/>}></Route>
                <Route path="/comingsoon" element={<ComingSoon/>}></Route>
                <Route path="*" element={<Error404Page/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
