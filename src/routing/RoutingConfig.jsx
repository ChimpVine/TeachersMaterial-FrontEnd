import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
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
import SocialStory from '../components/SpecialNeeds/SocialStory.jsx';
import SelGenerator from '../components/Learning/SelGenerator.jsx';
import SlideGenerator from '../components/Planner/SlideGenerator.jsx';
import RequestForm from '../routing/RecaptchaConfig.jsx';
import PdfSplitter from '../pages/PdfSplitter.jsx';
import TextSummarizer from '../components/Summarizer/TextSummarizer.jsx';
import GroupWork from '../components/Assessment/GroupWork.jsx';
import ReactGA from 'react-ga4';
import Maketheword from '../components/Gamification/Maketheword.jsx';
import PrivateRoute from '../components/PrivateRoute';
import Login from '../pages/Login/Login.jsx';
import Aboutus from '../pages/AboutUs/Aboutus.jsx';

export default function RoutingConfig() {
  const location = useLocation();

  const routeTitleMap = {
    '/': 'AI Tools for Teachers',
    '/MainPlanner': 'List of AI Tools for Teachers',
    '/Aboutus': 'About Us - AI Tools for Teachers',
    '/Login': 'Login - AI Tools for Teachers',
    '/LessonPlanner': 'Lesson Planner - AI Tools for Teachers',
    '/Quiz-generator': 'Quiz Generator - AI Tools for Teachers',
    '/Workbook': 'Workbook - AI Tools for Teachers',
    '/Worksheet': 'Worksheet - AI Tools for Teachers',
    '/Vocabulary': 'Vocabulary - AI Tools for Teachers',
    '/TongueTwister': 'Tongue Twister - AI Tools for Teachers',
    '/WordPuzzle': 'Word Puzzle - AI Tools for Teachers',
    '/SocialStory': 'Social Story - AI Tools for Teachers',
    '/SelGenerator': 'SEL Generator - AI Tools for Teachers',
    '/SlideGenerator': 'Slide Generator - AI Tools for Teachers',
    '/TextSummarizer': 'Text Summarizer - AI Tools for Teachers',
    '/GroupWork': 'Group Work - AI Tools for Teachers',
    '/Maketheword': 'Make the word - AI Tools for Teachers',
    '/ContactUs': 'Contact Us - AI Tools for Teachers',
    '/PdfSplitter': 'Pdf Splitter - AI Tools for Teachers',
    '/Comingsoon': 'Comingsoon',
  };

  const pageTitle = routeTitleMap[location.pathname] || 'Error 404 - AI Tools for Teachers';

  const BASE_URL = 'https://teachertools-api.chimpvine.com';

  ReactGA.initialize('G-TBNNYXX21K');
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route element={<PrivateRoute />}>
          <Route path="/MainPlanner" element={<MainPlanner />} />
          <Route path="/LessonPlanner" element={<LessonPlanner BASE_URL={BASE_URL} />} />
          <Route path="/Quiz-generator" element={<QuizUI BASE_URL={BASE_URL} />} />
          <Route path="/Workbook" element={<WorkBook BASE_URL={BASE_URL} />} />
          <Route path="/Worksheet" element={<WorkSheet BASE_URL={BASE_URL} />} />
          <Route path="/Vocabulary" element={<Vocabulary BASE_URL={BASE_URL} />} />
          <Route path="/TongueTwister" element={<TongueTwister BASE_URL={BASE_URL} />} />
          <Route path="/WordPuzzle" element={<WordPuzzle BASE_URL={BASE_URL} />} />
          <Route path="/SocialStory" element={<SocialStory BASE_URL={BASE_URL} />} />
          <Route path="/SelGenerator" element={<SelGenerator BASE_URL={BASE_URL} />} />
          <Route path="/SlideGenerator" element={<SlideGenerator BASE_URL={BASE_URL} />} />
          <Route path="/TextSummarizer" element={<TextSummarizer BASE_URL={BASE_URL} />} />
          <Route path="/GroupWork" element={<GroupWork BASE_URL={BASE_URL} />} />
          <Route path="/Maketheword" element={<Maketheword BASE_URL={BASE_URL} />} />
          <Route path="/Comingsoon" element={<ComingSoon />} />
        </Route>
        <Route path="/ContactUs" element={<RequestForm BASE_URL={BASE_URL} />} />
        <Route path="/PdfSplitter" element={<PdfSplitter />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </HelmetProvider>
  );
}
