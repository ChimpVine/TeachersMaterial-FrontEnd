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
import PdfSplitter from '../pages/PdfSplitter/PdfSplitter-main.jsx';
import TextSummarizer from '../components/Summarizer/TextSummarizer.jsx';
import GroupWork from '../components/Assessment/GroupWork.jsx';
import ReactGA from 'react-ga4';
import Maketheword from '../components/Gamification/Maketheword.jsx';
import PrivateRoute from '../components/PrivateRoute';
import Login from '../pages/Login/Login.jsx';
import Aboutus from '../pages/AboutUs/Aboutus.jsx';
import SatMaths from '../components/Assessment/SatMaths.jsx';
import TeacherJoke from "../components/Gamification/TeacherJoke.jsx"
import BingoGenerator from "../components/Gamification/BingoGenerator.jsx"
import MysteryCase from "../components/Gamification/Mysterycase.jsx"
import YTSummarizer from '../components/Summarizer/YTSummarizer.jsx';
import FunMaths from '../components/Gamification/FunMaths.jsx';
import HandoutsPlanner from '../components/Planner/HandoutsPlanner.jsx';
import AIDirectory from '../pages/SeoPage/AIDirectory.jsx';
import SEOLessonPlanner from '../pages/SeoPage/SEOLessonPlanner.jsx';
import SEOWorksheet from '../pages/SeoPage/SEOWorksheet.jsx';
import SEOTongueTwister from '../pages/SeoPage/SEOTongueTwister.jsx';
import SEOSlideGenerator from '../pages/SeoPage/SEOSlideGenerator.jsx';
import SEOWordPuzzle from '../pages/SeoPage/SEOWordPuzzle.jsx'
import SEOTextSummarizer from '../pages/SeoPage/SEOTextSummarizer.jsx';
import SEOSELGenerator from '../pages/SeoPage/SEOSELGenerator.jsx'
import ScrollToTop from '../pages/ScrollToTop.jsx';
import SEOMaketheword from '../pages/SeoPage/SEOMaketheword.jsx';
import SEOSATMaths from '../pages/SeoPage/SEOSATMaths.jsx';
import SEOYTSummarizer from '../pages/SeoPage/SEOYTSummarizer.jsx';
import SEOFunMath from '../pages/SeoPage/SEOFunMath.jsx';
import SEOBingoGenerator from '../pages/SeoPage/SEOBingoGenerator.jsx';
import SEOMysteryCase from '../pages/SeoPage/SEOMysteryCase.jsx';
import SEOTeacherJoke from '../pages/SeoPage/SEOTeacherJoke.jsx';
import SEOWorkbookPlanner from '../pages/SeoPage/SEOWorkbookPlanner.jsx';
import SEOVocabulary from '../pages/SeoPage/SEOVocabulary.jsx';
import SEOGroupWork from '../pages/SeoPage/SEOGroupWork.jsx';
import SEOSocialStory from '../pages/SeoPage/SEOSocialStory.jsx';
import SEOQuizGenerator from '../pages/SeoPage/SEOQuizGenerator.jsx';

export default function RoutingConfig() {
  const location = useLocation();

  const routeTitleMap = {
    '/': 'AI Tools for Teachers',
    '/ai-tools-for-teachers': 'List of AI Tools for Teachers',
    '/about-us': 'About Us - AI Tools for Teachers',
    '/login': 'Login - AI Tools for Teachers',
    '/lesson-planner': 'Lesson Planner - AI Tools for Teachers',
    '/quiz-generator': 'Quiz Generator - AI Tools for Teachers',
    '/workbook-planner': 'Workbook - AI Tools for Teachers',
    '/worksheet-planner': 'Worksheet - AI Tools for Teachers',
    '/vocabulary-builder': 'Vocabulary - AI Tools for Teachers',
    '/tongue-twister': 'Tongue Twister - AI Tools for Teachers',
    '/word-puzzle': 'Word Puzzle - AI Tools for Teachers',
    '/social-story': 'Social Story - AI Tools for Teachers',
    '/sel-generator': 'SEL Generator - AI Tools for Teachers',
    '/slide-generator': 'Slide Generator - AI Tools for Teachers',
    '/text-summarizer': 'Text Summarizer - AI Tools for Teachers',
    '/group-work': 'Group Work - AI Tools for Teachers',
    '/make-the-word': 'Make the word - AI Tools for Teachers',
    '/sat-maths': 'SAT Math - AI Tools for Teachers',
    '/pdf-splitter': 'Pdf Splitter - AI Tools for Teachers',
    '/teacher-joke': 'Teacher-Joke - AI Tools for Teachers',
    '/bingo-generator': 'Bingo Generator - AI Tools for Teachers',
    '/mystery-case': 'Mystery Case - AI Tools for Teachers',
    '/yt-summarizer': 'YT Summarizer - AI Tools for Teachers',
    '/fun-maths': 'Fun Maths - AI Tools for Teachers',
    '/handouts-planner': 'Handouts Planner - AI Tools for Teachers',
    '/comingsoon': 'Comingsoon - AI Tools for Teachers',
  };

  const pageTitle = routeTitleMap[location.pathname] || 'Error 404 - AI Tools for Teachers';

  const BASE_URL = 'https://teachertools-api.chimpvine.com';

  // const BASE_URL = 'http://192.168.1.232:8080';

  ReactGA.initialize('G-TBNNYXX21K');

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login BASE_URL={BASE_URL}/>}  />
        <Route path="/about-us" element={<Aboutus BASE_URL={BASE_URL}/>} />
        <Route element={<PrivateRoute />}>
          <Route path="/ai-tools-for-teachers" element={<MainPlanner />} />
          <Route path="/lesson-planner" element={<LessonPlanner BASE_URL={BASE_URL} />} />
          <Route path="/quiz-generator" element={<QuizUI BASE_URL={BASE_URL} />} />
          <Route path="/workbook-planner" element={<WorkBook BASE_URL={BASE_URL} />} />
          <Route path="/worksheet-planner" element={<WorkSheet BASE_URL={BASE_URL} />} />
          <Route path="/vocabulary-builder" element={<Vocabulary BASE_URL={BASE_URL} />} />
          <Route path="/tongue-twister" element={<TongueTwister BASE_URL={BASE_URL} />} />
          <Route path="/word-puzzle" element={<WordPuzzle BASE_URL={BASE_URL} />} />
          <Route path="/social-story" element={<SocialStory BASE_URL={BASE_URL} />} />
          <Route path="/sel-generator" element={<SelGenerator BASE_URL={BASE_URL} />} />
          <Route path="/slide-generator" element={<SlideGenerator BASE_URL={BASE_URL} />} />
          <Route path="/text-summarizer" element={<TextSummarizer BASE_URL={BASE_URL} />} />
          <Route path="/group-work" element={<GroupWork BASE_URL={BASE_URL} />} />
          <Route path="/make-the-word" element={<Maketheword BASE_URL={BASE_URL} />} />
          <Route path="/sat-maths" element={<SatMaths BASE_URL={BASE_URL} />} />
          <Route path="/teacher-joke" element={<TeacherJoke BASE_URL={BASE_URL}/>} />
          <Route path="/mystery-case" element={<MysteryCase BASE_URL={BASE_URL}/>} />
          <Route path="/bingo-generator" element={<BingoGenerator BASE_URL={BASE_URL} />} />
          <Route path="/yt-summarizer" element={<YTSummarizer BASE_URL={BASE_URL} />} />
          <Route path="/fun-maths" element={<FunMaths BASE_URL={BASE_URL} />} />
          <Route path="/handouts-planner" element={<HandoutsPlanner BASE_URL={BASE_URL} />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Route>
        <Route path="/ai-directory" element={<AIDirectory/>} />
        <Route path="/about-quiz-generator" element={<SEOQuizGenerator/>}/>
        <Route path="/about-social-story" element={<SEOSocialStory/>}/>
        <Route path="/about-group-work" element={<SEOGroupWork/>}/>
        <Route path="/about-vocabulary-builder" element={<SEOVocabulary/>}/>
        <Route path="/about-workbook-planner" element={<SEOWorkbookPlanner/>}/>
        <Route path="/about-lesson-planner" element={<SEOLessonPlanner/>}/>
        <Route path="/about-teacher-joke" element={<SEOTeacherJoke/>}/>
        <Route path="/about-mystery-case" element={<SEOMysteryCase/>}/>
        <Route path="/about-bingo-generator" element={<SEOBingoGenerator/>}/>
        <Route path="/about-text-summarizer" element={<SEOTextSummarizer/>}/>
        <Route path="/about-word-puzzle" element={<SEOWordPuzzle/>}/>
        <Route path="/about-worksheet-planner" element={<SEOWorksheet/>}/>
        <Route path="/about-tongue-twister" element={<SEOTongueTwister/>}/>
        <Route path='/about-slide-generator' element={<SEOSlideGenerator/>}/>
        <Route path='/about-sel-generator' element={<SEOSELGenerator/>}/>
        <Route path='/about-make-the-word' element={<SEOMaketheword/>}/>
        <Route path='/about-sat-maths' element={<SEOSATMaths/>}/>
        <Route path='/about-yt-summarizer' element={<SEOYTSummarizer/>}/>
        <Route path='/about-fun-math' element={<SEOFunMath/>}/>
        <Route path="/pdf-splitter" element={<PdfSplitter />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </HelmetProvider>
  );
}
