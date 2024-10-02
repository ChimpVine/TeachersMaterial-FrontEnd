import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404Page from '../pages/Error404Page';
import LessonPlanner from '../components/LessonPlanner.jsx';
import QuizUI from '../components/QuizUI.jsx';
import MainPlanner from '../components/MainPlanner.jsx';
import WorkBook from '../components/WorkBook.jsx';
import WorkSheet from '../components/WorkSheet.jsx';
import GetStarted from '../components/GetStarted.jsx';
import Vocabulary from '../components/Learning/Vocabulary.jsx';
import ComingSoon from '../pages/ComingSoon.jsx';
import TongueTwister from '../components/Gamification/TongueTwister.jsx';
import WordPuzzle from '../components/Gamification/WordPuzzle.jsx';
import YTSummarizer from '../components/Summarizer/YTSummarizer.jsx';
import SocialStory from '../components/SpecialNeeds/SocialStory.jsx';
import SelGenerator from '../components/Learning/SelGenerator.jsx';
import RequestForm from '../routing/RecaptchaConfig.jsx'
import ReactGA from 'react-ga4';

export default function RoutingConfig() {
  ReactGA.initialize('G-TBNNYXX21K');
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/MainPlanner" element={<MainPlanner />} />
            <Route path="/LessonPlanner" element={<LessonPlanner />} />
            <Route path="/Quiz-generator" element={<QuizUI />} />
            <Route path="/Workbook" element={<WorkBook />} />
            <Route path="/Worksheet" element={<WorkSheet />} />
            <Route path="/Vocabulary" element={<Vocabulary />} />
            <Route path="/TongueTwister" element={<TongueTwister />} />
            <Route path="/WordPuzzle" element={<WordPuzzle />} />
            <Route path="/YTSummarizer" element={<YTSummarizer />} />
            <Route path="/SocialStory" element={<SocialStory />} />
            <Route path="/SelGenerator" element={<SelGenerator />} />
            <Route path="/RequestForm" element={<RequestForm />} />
            <Route path="/Comingsoon" element={<ComingSoon />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}
