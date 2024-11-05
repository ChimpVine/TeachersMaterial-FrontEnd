import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error404Page from '../pages/Error404Page';
import LessonPlanner from '../components/Planner/LessonPlanner.jsx';
import QuizUI from '../components/Assessment/QuizUI.jsx';
import MainPlanner from '../components/MainPlanner.jsx';
import WorkBook from '../components/Assessment/WorkBook.jsx';
import WorkSheet from '../components/Assessment/WorkSheet.jsx';
import GetStarted from '../components/GetStarted.jsx';
import Vocabulary from '../components/Learning/Vocabulary.jsx';
import ComingSoon from '../pages/ComingSoon.jsx';
import TongueTwister from '../components/Gamification/TongueTwister.jsx';
import WordPuzzle from '../components/Gamification/WordPuzzle.jsx';
// import YTSummarizer from '../components/Summarizer/YTSummarizer.jsx';
import SocialStory from '../components/SpecialNeeds/SocialStory.jsx';
import SelGenerator from '../components/Learning/SelGenerator.jsx';
import SlideGenerator from '../components/Planner/SlideGenerator.jsx';
import RequestForm from '../routing/RecaptchaConfig.jsx'
import PdfSplitter from '../pages/PdfSplitter.jsx'
import TextSummarizer from '../components/Summarizer/TextSummarizer.jsx';
import GroupWork from '../components/Assessment/GroupWork.jsx';
import ReactGA from 'react-ga4';
import Maketheword from '../components/Gamification/Maketheword.jsx';

export default function RoutingConfig() {

  const BASE_URL ='https://teachertools-api.chimpvine.com';
  
  ReactGA.initialize('G-TBNNYXX21K');
  return (
    <>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/MainPlanner" element={<MainPlanner />} />
        <Route path="/LessonPlanner" element={<LessonPlanner BASE_URL={BASE_URL}/>} />
        <Route path="/Quiz-generator" element={<QuizUI BASE_URL={BASE_URL}/>} />
        <Route path="/Workbook" element={<WorkBook BASE_URL={BASE_URL}/>} />
        <Route path="/Worksheet" element={<WorkSheet BASE_URL={BASE_URL}/>} />
        <Route path="/Vocabulary" element={<Vocabulary BASE_URL={BASE_URL}/>} />
        <Route path="/TongueTwister" element={<TongueTwister BASE_URL={BASE_URL}/>} />
        <Route path="/WordPuzzle" element={<WordPuzzle BASE_URL={BASE_URL}/>} />
        {/* <Route path="/YTSummarizer" element={<YTSummarizer BASE_URL={BASE_URL}/>} /> */}
        <Route path="/SocialStory" element={<SocialStory BASE_URL={BASE_URL}/>} />
        <Route path="/SelGenerator" element={<SelGenerator BASE_URL={BASE_URL}/>} />
        <Route path="/SlideGenerator" element={<SlideGenerator BASE_URL={BASE_URL}/>} />
        <Route path="/TextSummarizer" element={<TextSummarizer BASE_URL={BASE_URL}/>} />
        <Route path="/GroupWork" element={<GroupWork BASE_URL={BASE_URL}/>} />
        <Route path="/Maketheword" element={<Maketheword BASE_URL={BASE_URL}/>} />
        <Route path="/RequestForm" element={<RequestForm BASE_URL={BASE_URL}/>} />
        <Route path="/PdfSplitter" element={<PdfSplitter />} />
        <Route path="/Comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </>
  );
}
