import React from 'react';
import type { Subject, User, Doubt, Contest, StudentPerformance, Resource, FaqItem, Attendance, Quiz, CareerPath, MotivationalStory, Textbook } from './types';
import { UserRole, Stream } from './types';

// --- ICONS ---
export const BookOpenIcon = (props: { className?: string }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);
export const MessageQuestionIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01A.75.75 0 0 1 12 8.25ZM12 15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v4.5A.75.75 0 0 1 12 15Z" />
    </svg>
);
export const TrophyIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 1 0 0-13.5h9a9.75 9.75 0 1 0 0 13.5ZM10.5 6h3m-3 3h3m-3 3h3m-3 3h3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75a9.75 9.75 0 0 0-1.875-.25m-11.25 0a9.75 9.75 0 0 1 1.875-.25M12 21.75V15" />
    </svg>
);
export const HomeIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.5 1.5 0 0 1 2.122 0l8.954 8.955M3 13.5V21h6V15h6v6h6v-7.5M12 3v5.25" />
    </svg>
);
export const ChartBarIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
);
export const UsersIcon = (props: { className?: string }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
  </svg>
);
export const ChevronDownIcon = (props: { className?: string }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);
export const PlayIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
    </svg>
);
export const SparklesIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);
export const DocumentReportIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2-2Z" />
    </svg>
);
export const CollectionIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
    </svg>
);
export const QuestionMarkCircleIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
    </svg>
);
export const ClipboardListIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01M10.5 16.5h3m-3.75 3.75h3.75M17.25 3H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V5.25A2.25 2.25 0 0 0 17.25 3Z" />
    </svg>
);
export const ShieldCheckIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
    </svg>
);
export const PencilIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
);
export const BriefcaseIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075c0 1.313-.972 2.513-2.25 2.664-1.278.151-2.505-.333-3.334-1.225h-4.332c-.83.892-2.056 1.376-3.334 1.225-1.278-.151-2.25-1.351-2.25-2.664V14.15M17.25 4.5h-10.5a.75.75 0 0 0-.75.75v3.375c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 8.625h-4.5" />
    </svg>
);
export const FilmIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
    </svg>
);
export const CameraIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.776 48.776 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
    </svg>
);
export const HeartIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
);
export const RotateDeviceIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 3.866-3.134 7-7 7s-7-3.134-7-7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5 19.5 10.5m0 0L16.5 13.5" />
    </svg>
);
export const PhoneIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </svg>
);
export const DownloadIcon = (props: { className?: string }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);


// --- NAVIGATION ---
export const navItemsByRole = {
  [UserRole.Student]: [
    { id: 'lessons', label: 'Lessons', punjabiLabel: 'ਪਾਠ', icon: BookOpenIcon },
    { id: 'quizzes', label: 'Quizzes', punjabiLabel: 'ਕਵਿਜ਼', icon: PencilIcon },
    { id: 'doubts', label: 'My Doubts', punjabiLabel: 'ਮੇਰੇ ਸ਼ੱਕ', icon: MessageQuestionIcon },
    { id: 'contests', label: 'Contests', punjabiLabel: 'ਮੁਕਾਬਲੇ', icon: TrophyIcon },
    { id: 'career', label: 'Career Viewpoint', punjabiLabel: 'ਕਰੀਅਰ ਦ੍ਰਿਸ਼ਟੀਕੋਣ', icon: BriefcaseIcon },
    { id: 'assistant', label: 'AI Assistant', punjabiLabel: 'AI ਸਹਾਇਕ', icon: SparklesIcon },
    { id: 'reports', label: 'My Reports', punjabiLabel: 'ਮੇਰੀਆਂ ਰਿਪੋਰਟਾਂ', icon: DocumentReportIcon },
    { id: 'resources', label: 'Resources', punjabiLabel: 'ਸਰੋਤ', icon: CollectionIcon },
    { id: 'help', label: 'Help & FAQ', punjabiLabel: 'ਮਦਦ ਅਤੇ ਸਵਾਲ', icon: QuestionMarkCircleIcon },
  ],
  [UserRole.Teacher]: [
    { id: 'dashboard', label: 'Dashboard', punjabiLabel: 'ਡੈਸ਼ਬੋਰਡ', icon: HomeIcon },
    { id: 'courses', label: 'Course Management', punjabiLabel: 'ਕੋਰਸ ਪ੍ਰਬੰਧਨ', icon: BookOpenIcon },
    { id: 'progress', label: 'Student Progress', punjabiLabel: 'ਵਿਦਿਆਰਥੀ ਤਰੱਕੀ', icon: ChartBarIcon },
    { id: 'students', label: 'Student Info', punjabiLabel: 'ਵਿਦਿਆਰਥੀ ਜਾਣਕਾਰੀ', icon: UsersIcon },
    { id: 'attendance', label: 'Attendance', punjabiLabel: 'ਹਾਜ਼ਰੀ', icon: ClipboardListIcon },
    { id: 'doubts', label: 'Doubt Section', punjabiLabel: 'ਸ਼ੱਕ ਭਾਗ', icon: MessageQuestionIcon },
    { id: 'contests', label: 'Contest Management', punjabiLabel: 'ਮੁਕਾਬਲਾ ਪ੍ਰਬੰਧਨ', icon: TrophyIcon },
    { id: 'assistant', label: 'AI Assistant', punjabiLabel: 'AI ਸਹਾਇਕ', icon: SparklesIcon },
    { id: 'help', label: 'Help & FAQ', punjabiLabel: 'ਮਦਦ ਅਤੇ ਸਵਾਲ', icon: QuestionMarkCircleIcon },
  ],
  [UserRole.Admin]: [
    { id: 'analytics', label: 'Analytics', punjabiLabel: 'ਵਿਸ਼ਲੇਸ਼ਣ', icon: ChartBarIcon },
    { id: 'reports', label: 'Reports', punjabiLabel: 'ਰਿਪੋਰਟਾਂ', icon: DocumentReportIcon },
    { id: 'schools', label: 'School Management', punjabiLabel: 'ਸਕੂਲ ਪ੍ਰਬੰਧਨ', icon: HomeIcon },
    { id: 'assistant', label: 'AI Assistant', punjabiLabel: 'AI ਸਹਾਇਕ', icon: SparklesIcon },
  ],
};


// --- MOCK DATA ---

// --- USERS ---
export const STUDENTS: User[] = [
  { id: 's1', name: 'Pranav', email: 'pranav@example.com', role: UserRole.Student, profilePicture: 'https://picsum.photos/seed/pranav/200', parentName: 'Mr. Kumar', parentPhone: '987-654-3210', teacherNotes: 'Pranav is strong in Physics but needs encouragement in Geometry. Discussed progress on May 15th.', class: 10 },
  { id: 's2', name: 'Nithin', email: 'nithin@example.com', role: UserRole.Student, profilePicture: 'https://picsum.photos/seed/nithin/200', parentName: 'Mrs. Reddy', parentPhone: '876-543-2109', teacherNotes: 'Nithin is very inquisitive. Needs to focus on completing assignments on time.', class: 9 },
  { id: 's3', name: 'DChai', email: 'dchai@gmail.com', role: UserRole.Student, profilePicture: 'https://picsum.photos/seed/dchai/200', parentName: 'Mr. Patel', parentPhone: '765-432-1098', teacherNotes: '', class: 8 },
];

export const TEACHERS: User[] = [
  { id: 't1', name: 'Sai Pranav', email: 'sai_pranav@example.com', role: UserRole.Teacher, profilePicture: 'https://picsum.photos/seed/saipranav/200' },
  { id: 't2', name: 'Parthiv', email: 'parthiv@example.com', role: UserRole.Teacher, profilePicture: 'https://picsum.photos/seed/parthiv/200' },
];

export const ADMINS: User[] = [
  { id: 'a1', name: 'Neha', email: 'neha@example.com', role: UserRole.Admin, profilePicture: 'https://picsum.photos/seed/neha/200' },
];

// --- QUIZZES ---
const MATH_QUIZ_1: Quiz = {
    id: 'mq1',
    title: 'Algebra Basics Quiz',
    punjabiTitle: 'ਅਲਜਬਰਾ ਬੇਸਿਕਸ ਕਵਿਜ਼',
    questions: [
        { id: 'mq1q1', text: 'What is 2x + 3x?', punjabiText: '2x + 3x ਕੀ ਹੈ?', type: 'mcq', options: ['4x', '5x', '6x'], punjabiOptions: ['4x', '5x', '6x'], correctAnswer: 1 },
        { id: 'mq1q2', text: 'Solve for x: x + 5 = 12', punjabiText: 'x ਲਈ ਹੱਲ ਕਰੋ: x + 5 = 12', type: 'mcq', options: ['5', '6', '7'], punjabiOptions: ['5', '6', '7'], correctAnswer: 2 },
        { id: 'mq1q3', text: 'Simplify: 4(a + 3)', punjabiText: 'ਸਰਲ ਕਰੋ: 4(a + 3)', type: 'mcq', options: ['4a + 7', '4a + 12', 'a + 12'], punjabiOptions: ['4a + 7', '4a + 12', 'a + 12'], correctAnswer: 1 },
        { id: 'mq1q4', text: 'What is the value of y if y = 3x - 2 and x = 4?', punjabiText: 'y ਦਾ ਮੁੱਲ ਕੀ ਹੈ ਜੇ y = 3x - 2 ਅਤੇ x = 4?', type: 'mcq', options: ['10', '12', '14'], punjabiOptions: ['10', '12', '14'], correctAnswer: 0 },
        { id: 'mq1q5', text: 'Combine like terms: 5a + 2b - 3a + 4b', punjabiText: 'ਇੱਕੋ ਜਿਹੇ ਪਦਾਂ ਨੂੰ ਮਿਲਾਓ: 5a + 2b - 3a + 4b', type: 'mcq', options: ['2a + 6b', '8a + 6b', '2a - 2b'], punjabiOptions: ['2a + 6b', '8a + 6b', '2a - 2b'], correctAnswer: 0 },
        { id: 'mq1q6', text: 'What is (-3)^2?', punjabiText: '(-3)^2 ਕੀ ਹੈ?', type: 'mcq', options: ['-9', '9', '-6'], punjabiOptions: ['-9', '9', '-6'], correctAnswer: 1 },
        { id: 'mq1q7', text: 'Solve for b: 2b = 18', punjabiText: 'b ਲਈ ਹੱਲ ਕਰੋ: 2b = 18', type: 'mcq', options: ['9', '16', '36'], punjabiOptions: ['9', '16', '36'], correctAnswer: 0 },
        { id: 'mq1q8', text: 'Expand: (x + 2)(x + 3)', punjabiText: 'ਵਿਸਤਾਰ ਕਰੋ: (x + 2)(x + 3)', type: 'mcq', options: ['x^2 + 6', 'x^2 + 5x + 6', 'x^2 + 6x + 5'], punjabiOptions: ['x^2 + 6', 'x^2 + 5x + 6', 'x^2 + 6x + 5'], correctAnswer: 1 },
        { id: 'mq1q9', text: 'What is the coefficient of x in the term -7x?', punjabiText: '-7x ਪਦ ਵਿੱਚ x ਦਾ ਗੁਣਾਂਕ ਕੀ ਹੈ?', type: 'mcq', options: ['7', '-7', 'x'], punjabiOptions: ['7', '-7', 'x'], correctAnswer: 1 },
        { id: 'mq1q10', text: 'If 2x - 3 = 7, what is x?', punjabiText: 'ਜੇ 2x - 3 = 7, ਤਾਂ x ਕੀ ਹੈ?', type: 'mcq', options: ['4', '5', '6'], punjabiOptions: ['4', '5', '6'], correctAnswer: 1 },
        { id: 'mq1q11', text: 'Simplify: 10x / 2', punjabiText: 'ਸਰਲ ਕਰੋ: 10x / 2', type: 'mcq', options: ['5x', '8x', '5'], punjabiOptions: ['5x', '8x', '5'], correctAnswer: 0 },
        { id: 'mq1q12', text: 'What is the next term in the sequence: 2, 4, 6, 8, ...?', punjabiText: 'ਇਸ ਲੜੀ ਵਿੱਚ ਅਗਲਾ ਪਦ ਕੀ ਹੈ: 2, 4, 6, 8, ...?', type: 'mcq', options: ['9', '10', '12'], punjabiOptions: ['9', '10', '12'], correctAnswer: 1 },
        { id: 'mq1q13', text: 'Factorize: x^2 - 9', punjabiText: 'ਗੁਣਨਖੰਡ ਬਣਾਓ: x^2 - 9', type: 'mcq', options: ['(x-3)(x-3)', '(x+3)(x+3)', '(x-3)(x+3)'], punjabiOptions: ['(x-3)(x-3)', '(x+3)(x+3)', '(x-3)(x+3)'], correctAnswer: 2 },
        { id: 'mq1q14', text: 'Solve for y: y/3 = 4', punjabiText: 'y ਲਈ ਹੱਲ ਕਰੋ: y/3 = 4', type: 'mcq', options: ['7', '1', '12'], punjabiOptions: ['7', '1', '12'], correctAnswer: 2 },
        { id: 'mq1q15', text: 'What is the value of 5^0?', punjabiText: '5^0 ਦਾ ਮੁੱਲ ਕੀ ਹੈ?', type: 'mcq', options: ['5', '0', '1'], punjabiOptions: ['5', '0', '1'], correctAnswer: 2 },
        { id: 'mq1q16', text: 'Simplify: 3x + y - x + 2y', punjabiText: 'ਸਰਲ ਕਰੋ: 3x + y - x + 2y', type: 'mcq', options: ['2x + 3y', '4x + 3y', '2x + 2y'], punjabiOptions: ['2x + 3y', '4x + 3y', '2x + 2y'], correctAnswer: 0 },
        { id: 'mq1q17', text: 'If a = 2 and b = 3, what is a + b?', punjabiText: 'ਜੇ a = 2 ਅਤੇ b = 3, ਤਾਂ a + b ਕੀ ਹੈ?', type: 'mcq', options: ['5', '6', '4'], punjabiOptions: ['5', '6', '4'], correctAnswer: 0 },
        { id: 'mq1q18', text: 'What is the square root of 64?', punjabiText: '64 ਦਾ ਵਰਗਮੂਲ ਕੀ ਹੈ?', type: 'mcq', options: ['6', '7', '8'], punjabiOptions: ['6', '7', '8'], correctAnswer: 2 },
        { id: 'mq1q19', text: 'Solve for z: 4z = 20', punjabiText: 'z ਲਈ ਹੱਲ ਕਰੋ: 4z = 20', type: 'mcq', options: ['4', '5', '6'], punjabiOptions: ['4', '5', '6'], correctAnswer: 1 },
        { id: 'mq1q20', text: 'Expand: 2(x - 5)', punjabiText: 'ਵਿਸਤਾਰ ਕਰੋ: 2(x - 5)', type: 'mcq', options: ['2x - 5', '2x - 10', 'x - 10'], punjabiOptions: ['2x - 5', '2x - 10', 'x - 10'], correctAnswer: 1 }
    ]
};
const PHYSICS_QUIZ_1: Quiz = {
    id: 'pq1',
    title: 'Laws of Motion Quiz',
    punjabiTitle: 'ਗਤੀ ਦੇ ਨਿਯਮ ਕਵਿਜ਼',
    questions: [
        { id: 'pq1q1', text: "Which law is known as the law of inertia?", punjabiText: "ਕਿਹੜਾ ਨਿਯਮ ਜੜਤਾ ਦਾ ਨਿਯਮ ਵਜੋਂ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?", type: 'mcq', options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law"], punjabiOptions: ["ਨਿਊਟਨ ਦਾ ਪਹਿਲਾ ਨਿਯਮ", "ਨਿਊਟਨ ਦਾ ਦੂਜਾ ਨਿਯਮ", "ਨਿਊਟਨ ਦਾ ਤੀਜਾ ਨਿਯਮ"], correctAnswer: 0 },
        { id: 'pq1q2', text: 'What is the formula for force?', punjabiText: 'ਬਲ ਦਾ ਫਾਰਮੂਲਾ ਕੀ ਹੈ?', type: 'mcq', options: ['F = ma', 'F = m/a', 'F = a/m'], punjabiOptions: ['F = ma', 'F = m/a', 'F = a/m'], correctAnswer: 0 },
        { id: 'pq1q3', text: 'For every action, there is an equal and opposite...', punjabiText: 'ਹਰ ਕਿਰਿਆ ਲਈ, ਇੱਕ ਬਰਾਬਰ ਅਤੇ ਉਲਟ...', type: 'mcq', options: ['force', 'reaction', 'mass'], punjabiOptions: ['ਬਲ', 'ਪ੍ਰਤੀਕਿਰਿਆ', 'ਪੁੰਜ'], correctAnswer: 1 },
        { id: 'pq1q4', text: 'What is the unit of force?', punjabiText: 'ਬਲ ਦੀ ਇਕਾਈ ਕੀ ਹੈ?', type: 'mcq', options: ['Joule', 'Watt', 'Newton'], punjabiOptions: ['ਜੂਲ', 'ਵਾਟ', 'ਨਿਊਟਨ'], correctAnswer: 2 },
        { id: 'pq1q5', text: 'A book resting on a table is an example of:', punjabiText: 'ਮੇਜ਼ ਉੱਤੇ ਪਈ ਇੱਕ ਕਿਤਾਬ ਇਸਦੀ ਇੱਕ ਉਦਾਹਰਣ ਹੈ:', type: 'mcq', options: ['Balanced forces', 'Unbalanced forces', 'Friction'], punjabiOptions: ['ਸੰਤੁਲਿਤ ਬਲ', 'ਅਸੰਤੁਲਿਤ ਬਲ', 'ਰਗੜ'], correctAnswer: 0 },
        { id: 'pq1q6', text: 'What does "m" represent in F=ma?', punjabiText: 'F=ma ਵਿੱਚ "m" ਕੀ ਦਰਸਾਉਂਦਾ ਹੈ?', type: 'mcq', options: ['Momentum', 'Mass', 'Meters'], punjabiOptions: ['ਗਤੀ', 'ਪੁੰਜ', 'ਮੀਟਰ'], correctAnswer: 1 },
        { id: 'pq1q7', text: 'What does "a" represent in F=ma?', punjabiText: 'F=ma ਵਿੱਚ "a" ਕੀ ਦਰਸਾਉਂਦਾ ਹੈ?', type: 'mcq', options: ['Acceleration', 'Action', 'Amplitude'], punjabiOptions: ['ਪ੍ਰਵੇਗ', 'ਕਿਰਿਆ', 'ਵਿਸਤਾਰ'], correctAnswer: 0 },
        { id: 'pq1q8', text: 'If you push a wall, the wall pushes back on you. This is an example of which law?', punjabiText: 'ਜੇ ਤੁਸੀਂ ਇੱਕ ਕੰਧ ਨੂੰ ਧੱਕਦੇ ਹੋ, ਤਾਂ ਕੰਧ ਤੁਹਾਨੂੰ ਵਾਪਸ ਧੱਕਦੀ ਹੈ। ਇਹ ਕਿਸ ਨਿਯਮ ਦੀ ਉਦਾਹਰਣ ਹੈ?', type: 'mcq', options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law"], punjabiOptions: ["ਨਿਊਟਨ ਦਾ ਪਹਿਲਾ ਨਿਯਮ", "ਨਿਊਟਨ ਦਾ ਦੂਜਾ ਨਿਯਮ", "ਨਿਊਟਨ ਦਾ ਤੀਜਾ ਨਿਯਮ"], correctAnswer: 2 },
        { id: 'pq1q9', text: 'Inertia is the tendency of an object to resist a change in its...', punjabiText: 'ਜੜਤਾ ਕਿਸੇ ਵਸਤੂ ਦੀ ਇਸ ਵਿੱਚ ਤਬਦੀਲੀ ਦਾ ਵਿਰੋਧ ਕਰਨ ਦੀ ਪ੍ਰਵਿਰਤੀ ਹੈ...', type: 'mcq', options: ['state of motion', 'mass', 'volume'], punjabiOptions: ['ਗਤੀ ਦੀ ਅਵਸਥਾ', 'ਪੁੰਜ', 'ਆਇਤਨ'], correctAnswer: 0 },
        { id: 'pq1q10', text: 'A heavier object requires more force to move. This relates to which law?', punjabiText: 'ਇੱਕ ਭਾਰੀ ਵਸਤੂ ਨੂੰ ਹਿਲਾਉਣ ਲਈ ਵਧੇਰੇ ਬਲ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਇਹ ਕਿਸ ਨਿਯਮ ਨਾਲ ਸਬੰਧਤ ਹੈ?', type: 'mcq', options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law"], punjabiOptions: ["ਨਿਊਟਨ ਦਾ ਪਹਿਲਾ ਨਿਯਮ", "ਨਿਊਟਨ ਦਾ ਦੂਜਾ ਨਿਯਮ", "ਨਿਊਟਨ ਦਾ ਤੀਜਾ ਨਿਯਮ"], correctAnswer: 1 },
        { id: 'pq1q11', text: 'What is momentum?', punjabiText: 'ਗਤੀ ਕੀ ਹੈ?', type: 'mcq', options: ['Mass in motion', 'Force in motion', 'Energy in motion'], punjabiOptions: ['ਗਤੀ ਵਿੱਚ ਪੁੰਜ', 'ਗਤੀ ਵਿੱਚ ਬਲ', 'ਗਤੀ ਵਿੱਚ ਊਰਜਾ'], correctAnswer: 0 },
        { id: 'pq1q12', text: 'The formula for momentum is:', punjabiText: 'ਗਤੀ ਦਾ ਫਾਰਮੂਲਾ ਹੈ:', type: 'mcq', options: ['p = mv', 'p = m/v', 'p = v/m'], punjabiOptions: ['p = mv', 'p = m/v', 'p = v/m'], correctAnswer: 0 },
        { id: 'pq1q13', text: 'Friction is a force that...', punjabiText: 'ਰਗੜ ਇੱਕ ਬਲ ਹੈ ਜੋ...', type: 'mcq', options: ['opposes motion', 'assists motion', 'creates motion'], punjabiOptions: ['ਗਤੀ ਦਾ ਵਿਰੋਧ ਕਰਦਾ ਹੈ', 'ਗਤੀ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਦਾ ਹੈ', 'ਗਤੀ ਪੈਦਾ ਕਰਦਾ ਹੈ'], correctAnswer: 0 },
        { id: 'pq1q14', text: 'If the net force on an object is zero, its acceleration will be:', punjabiText: 'ਜੇ ਕਿਸੇ ਵਸਤੂ ਉੱਤੇ ਕੁੱਲ ਬਲ ਸਿਫ਼ਰ ਹੈ, ਤਾਂ ਉਸਦਾ ਪ੍ਰਵੇਗ ਹੋਵੇਗਾ:', type: 'mcq', options: ['Zero', 'Constant', 'Increasing'], punjabiOptions: ['ਸਿਫ਼ਰ', 'ਸਥਿਰ', 'ਵਧ ਰਿਹਾ'], correctAnswer: 0 },
        { id: 'pq1q15', text: 'A rocket launching is a good example of which law?', punjabiText: 'ਇੱਕ ਰਾਕੇਟ ਦਾ ਲਾਂਚ ਹੋਣਾ ਕਿਸ ਨਿਯਮ ਦੀ ਇੱਕ ਚੰਗੀ ਉਦਾਹਰਣ ਹੈ?', type: 'mcq', options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law"], punjabiOptions: ["ਨਿਊਟਨ ਦਾ ਪਹਿਲਾ ਨਿਯਮ", "ਨਿਊਟਨ ਦਾ ਦੂਜਾ ਨਿਯਮ", "ਨਿਊਟਨ ਦਾ ਤੀਜਾ ਨਿਯਮ"], correctAnswer: 2 },
        { id: 'pq1q16', text: 'The more massive an object, the greater its...', punjabiText: 'ਜਿੰਨੀ ਜ਼ਿਆਦਾ ਕਿਸੇ ਵਸਤੂ ਦਾ ਪੁੰਜ ਹੁੰਦਾ ਹੈ, ਓਨੀ ਹੀ ਜ਼ਿਆਦਾ ਉਸਦੀ...', type: 'mcq', options: ['inertia', 'velocity', 'acceleration'], punjabiOptions: ['ਜੜਤਾ', 'ਵੇਗ', 'ਪ੍ਰਵੇਗ'], correctAnswer: 0 },
        { id: 'pq1q17', text: 'Force is a vector quantity, meaning it has both magnitude and...', punjabiText: 'ਬਲ ਇੱਕ ਵੈਕਟਰ ਰਾਸ਼ੀ ਹੈ, ਜਿਸਦਾ ਅਰਥ ਹੈ ਕਿ ਇਸਦਾ ਪਰਿਮਾਣ ਅਤੇ... ਦੋਵੇਂ ਹੁੰਦੇ ਹਨ।', type: 'mcq', options: ['direction', 'mass', 'speed'], punjabiOptions: ['ਦਿਸ਼ਾ', 'ਪੁੰਜ', 'ਗਤੀ'], correctAnswer: 0 },
        { id: 'pq1q18', text: 'If you double the force on an object, what happens to its acceleration?', punjabiText: 'ਜੇ ਤੁਸੀਂ ਕਿਸੇ ਵਸਤੂ ਉੱਤੇ ਬਲ ਨੂੰ ਦੁੱਗਣਾ ਕਰਦੇ ਹੋ, ਤਾਂ ਉਸਦੇ ਪ੍ਰਵੇਗ ਦਾ ਕੀ ਹੁੰਦਾ ਹੈ?', type: 'mcq', options: ['It halves', 'It doubles', 'It stays the same'], punjabiOptions: ['ਇਹ ਅੱਧਾ ਹੋ ਜਾਂਦਾ ਹੈ', 'ਇਹ ਦੁੱਗਣਾ ਹੋ ਜਾਂਦਾ ਹੈ', 'ਇਹ ਉਹੀ ਰਹਿੰਦਾ ਹੈ'], correctAnswer: 1 },
        { id: 'pq1q19', text: 'A car suddenly stopping and you lurching forward is an example of:', punjabiText: 'ਇੱਕ ਕਾਰ ਦਾ ਅਚਾਨਕ ਰੁਕਣਾ ਅਤੇ ਤੁਹਾਡਾ ਅੱਗੇ ਨੂੰ ਝੁਕਣਾ ਇਸਦੀ ਇੱਕ ਉਦਾਹਰਣ ਹੈ:', type: 'mcq', options: ['Inertia', 'Momentum', 'Friction'], punjabiOptions: ['ਜੜਤਾ', 'ਗਤੀ', 'ਰਗੜ'], correctAnswer: 0 },
        { id: 'pq1q20', text: 'Which of these is NOT a force?', punjabiText: 'ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਇੱਕ ਬਲ ਨਹੀਂ ਹੈ?', type: 'mcq', options: ['Gravity', 'Friction', 'Speed'], punjabiOptions: ['ਗੁਰੁਤਾਕਰਸ਼ਣ', 'ਰਗੜ', 'ਗਤੀ'], correctAnswer: 2 }
    ]
};
const CHEMISTRY_QUIZ_1: Quiz = {
    id: 'cq1',
    title: 'Periodic Table Quiz',
    punjabiTitle: 'ਆਵਰਤੀ ਸਾਰਣੀ ਕਵਿਜ਼',
    questions: [
        { id: 'cq1q1', text: 'What is the symbol for Gold?', punjabiText: 'ਸੋਨੇ ਦਾ ਪ੍ਰਤੀਕ ਕੀ ਹੈ?', type: 'mcq', options: ['Ag', 'Au', 'G'], punjabiOptions: ['Ag', 'Au', 'G'], correctAnswer: 1 },
        { id: 'cq1q2', text: 'Which element is number 1 on the periodic table?', punjabiText: 'ਆਵਰਤੀ ਸਾਰਣੀ ਵਿੱਚ ਕਿਹੜਾ ਤੱਤ ਨੰਬਰ 1 ਉੱਤੇ ਹੈ?', type: 'mcq', options: ['Helium', 'Hydrogen', 'Oxygen'], punjabiOptions: ['ਹੀਲੀਅਮ', 'ਹਾਈਡ੍ਰੋਜਨ', 'ਆਕਸੀਜਨ'], correctAnswer: 1 },
        { id: 'cq1q3', text: 'What is the symbol for Sodium?', punjabiText: 'ਸੋਡੀਅਮ ਦਾ ਪ੍ਰਤੀਕ ਕੀ ਹੈ?', type: 'mcq', options: ['S', 'So', 'Na'], punjabiOptions: ['S', 'So', 'Na'], correctAnswer: 2 },
        { id: 'cq1q4', text: 'The horizontal rows on the periodic table are called:', punjabiText: 'ਆਵਰਤੀ ਸਾਰਣੀ ਵਿੱਚ ਖਿਤਿਜੀ ਕਤਾਰਾਂ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ:', type: 'mcq', options: ['Groups', 'Periods', 'Families'], punjabiOptions: ['ਗਰੁੱਪ', 'ਪੀਰੀਅਡ', 'ਪਰਿਵਾਰ'], correctAnswer: 1 },
        { id: 'cq1q5', text: 'The vertical columns on the periodic table are called:', punjabiText: 'ਆਵਰਤੀ ਸਾਰਣੀ ਵਿੱਚ ਲੰਬਕਾਰੀ ਕਾਲਮਾਂ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ:', type: 'mcq', options: ['Groups', 'Periods', 'Series'], punjabiOptions: ['ਗਰੁੱਪ', 'ਪੀਰੀਅਡ', 'ਲੜੀ'], correctAnswer: 0 },
        { id: 'cq1q6', text: 'What is the chemical symbol for water?', punjabiText: 'ਪਾਣੀ ਦਾ ਰਸਾਇਣਕ ਪ੍ਰਤੀਕ ਕੀ ਹੈ?', type: 'mcq', options: ['H2O', 'CO2', 'O2'], punjabiOptions: ['H2O', 'CO2', 'O2'], correctAnswer: 0 },
        { id: 'cq1q7', text: 'Which group is known as the Noble Gases?', punjabiText: 'ਕਿਹੜਾ ਗਰੁੱਪ ਨੋਬਲ ਗੈਸਾਂ ਵਜੋਂ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?', type: 'mcq', options: ['Group 1', 'Group 17', 'Group 18'], punjabiOptions: ['ਗਰੁੱਪ 1', 'ਗਰੁੱਪ 17', 'ਗਰੁੱਪ 18'], correctAnswer: 2 },
        { id: 'cq1q8', text: 'What is the symbol for Iron?', punjabiText: 'ਲੋਹੇ ਦਾ ਪ੍ਰਤੀਕ ਕੀ ਹੈ?', type: 'mcq', options: ['I', 'Ir', 'Fe'], punjabiOptions: ['I', 'Ir', 'Fe'], correctAnswer: 2 },
        { id: 'cq1q9', text: 'Which of these is a halogen?', punjabiText: 'ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਇੱਕ ਹੈਲੋਜਨ ਹੈ?', type: 'mcq', options: ['Sodium', 'Chlorine', 'Helium'], punjabiOptions: ['ਸੋਡੀਅਮ', 'ਕਲੋਰੀਨ', 'ਹੀਲੀਅਮ'], correctAnswer: 1 },
        { id: 'cq1q10', text: 'What is the atomic number of Carbon?', punjabiText: 'ਕਾਰਬਨ ਦਾ ਪਰਮਾਣੂ ਅੰਕ ਕੀ ਹੈ?', type: 'mcq', options: ['6', '12', '14'], punjabiOptions: ['6', '12', '14'], correctAnswer: 0 },
        { id: 'cq1q11', text: 'What is the symbol for Potassium?', punjabiText: 'ਪੋਟਾਸ਼ੀਅਮ ਦਾ ਪ੍ਰਤੀਕ ਕੀ ਹੈ?', type: 'mcq', options: ['P', 'Po', 'K'], punjabiOptions: ['P', 'Po', 'K'], correctAnswer: 2 },
        { id: 'cq1q12', text: 'Which element is essential for breathing?', punjabiText: 'ਸਾਹ ਲੈਣ ਲਈ ਕਿਹੜਾ ਤੱਤ ਜ਼ਰੂਰੀ ਹੈ?', type: 'mcq', options: ['Carbon', 'Oxygen', 'Nitrogen'], punjabiOptions: ['ਕਾਰਬਨ', 'ਆਕਸੀਜਨ', 'ਨਾਈਟ੍ਰੋਜਨ'], correctAnswer: 1 },
        { id: 'cq1q13', text: 'What do elements in the same group have in common?', punjabiText: 'ਇੱਕੋ ਗਰੁੱਪ ਦੇ ਤੱਤਾਂ ਵਿੱਚ ਕੀ ਸਾਂਝਾ ਹੁੰਦਾ ਹੈ?', type: 'mcq', options: ['Same number of protons', 'Same number of valence electrons', 'Same atomic mass'], punjabiOptions: ['ਪ੍ਰੋਟੋਨਾਂ ਦੀ ਇੱਕੋ ਸੰਖਿਆ', 'ਵੈਲੈਂਸ ਇਲੈਕਟ੍ਰਾਨਾਂ ਦੀ ਇੱਕੋ ਸੰਖਿਆ', 'ਇੱਕੋ ਪਰਮਾਣੂ ਪੁੰਜ'], correctAnswer: 1 },
        { id: 'cq1q14', text: 'What is the symbol for Silver?', punjabiText: 'ਚਾਂਦੀ ਦਾ ਪ੍ਰਤੀਕ ਕੀ ਹੈ?', type: 'mcq', options: ['Si', 'S', 'Ag'], punjabiOptions: ['Si', 'S', 'Ag'], correctAnswer: 2 },
        { id: 'cq1q15', text: 'Which of these is an alkali metal?', punjabiText: 'ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਇੱਕ ਅਲਕਲੀ ਧਾਤ ਹੈ?', type: 'mcq', options: ['Calcium', 'Lithium', 'Aluminum'], punjabiOptions: ['ਕੈਲਸ਼ੀਅਮ', 'ਲਿਥੀਅਮ', 'ਐਲੂਮੀਨੀਅਮ'], correctAnswer: 1 },
        { id: 'cq1q16', text: 'How many periods are there in the periodic table?', punjabiText: 'ਆਵਰਤੀ ਸਾਰਣੀ ਵਿੱਚ ਕਿੰਨੇ ਪੀਰੀਅਡ ਹੁੰਦੇ ਹਨ?', type: 'mcq', options: ['7', '8', '9'], punjabiOptions: ['7', '8', '9'], correctAnswer: 0 },
        { id: 'cq1q17', text: 'What is the symbol for Lead?', punjabiText: 'ਸਿੱਕੇ ਦਾ ਪ੍ਰਤੀਕ ਕੀ ਹੈ?', type: 'mcq', options: ['L', 'Le', 'Pb'], punjabiOptions: ['L', 'Le', 'Pb'], correctAnswer: 2 },
        { id: 'cq1q18', text: 'Which element is a liquid at room temperature?', punjabiText: 'ਕਮਰੇ ਦੇ ਤਾਪਮਾਨ ਉੱਤੇ ਕਿਹੜਾ ਤੱਤ ਤਰਲ ਹੁੰਦਾ ਹੈ?', type: 'mcq', options: ['Chlorine', 'Mercury', 'Bromine'], punjabiOptions: ['ਕਲੋਰੀਨ', 'ਪਾਰਾ', 'ਬ੍ਰੋਮਿਨ'], correctAnswer: 1 },
        { id: 'cq1q19', text: 'What is the most abundant element in the Earth\'s atmosphere?', punjabiText: 'ਧਰਤੀ ਦੇ ਵਾਯੂਮੰਡਲ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਮਾਤਰਾ ਵਿੱਚ ਕਿਹੜਾ ਤੱਤ ਹੈ?', type: 'mcq', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide'], punjabiOptions: ['ਆਕਸੀਜਨ', 'ਨਾਈਟ੍ਰੋਜਨ', 'ਕਾਰਬਨ ਡਾਈਆਕਸਾਈਡ'], correctAnswer: 1 },
        { id: 'cq1q20', text: 'What is the symbol for Tin?', punjabiText: 'ਟਿਨ ਦਾ ਪ੍ਰਤੀਕ ਕੀ ਹੈ?', type: 'mcq', options: ['T', 'Ti', 'Sn'], punjabiOptions: ['T', 'Ti', 'Sn'], correctAnswer: 2 }
    ]
};
const BIOLOGY_QUIZ_1: Quiz = {
    id: 'bq1',
    title: 'Cell Structure Quiz',
    punjabiTitle: 'ਸੈੱਲ ਬਣਤਰ ਕਵਿਜ਼',
    questions: [
        { id: 'bq1q1', text: 'What is the powerhouse of the cell?', punjabiText: 'ਸੈੱਲ ਦਾ ਪਾਵਰਹਾਊਸ ਕੀ ਹੈ?', type: 'mcq', options: ['Nucleus', 'Ribosome', 'Mitochondria'], punjabiOptions: ['ਨਿਊਕਲੀਅਸ', 'ਰਾਈਬੋਸੋਮ', 'ਮਾਈਟੋਕਾਂਡਰੀਆ'], correctAnswer: 2 },
        { id: 'bq1q2', text: 'Which part of the cell contains the genetic material?', punjabiText: 'ਸੈੱਲ ਦੇ ਕਿਸ ਹਿੱਸੇ ਵਿੱਚ ਜੈਨੇਟਿਕ ਸਮੱਗਰੀ ਹੁੰਦੀ ਹੈ?', type: 'mcq', options: ['Cytoplasm', 'Nucleus', 'Cell Membrane'], punjabiOptions: ['ਸਾਈਟੋਪਲਾਜ਼ਮ', 'ਨਿਊਕਲੀਅਸ', 'ਸੈੱਲ ਝਿੱਲੀ'], correctAnswer: 1 },
        { id: 'bq1q3', text: 'What is the function of ribosomes?', punjabiText: 'ਰਾਈਬੋਸੋਮ ਦਾ ਕੰਮ ਕੀ ਹੈ?', type: 'mcq', options: ['Energy production', 'Protein synthesis', 'Waste disposal'], punjabiOptions: ['ਊਰਜਾ ਉਤਪਾਦਨ', 'ਪ੍ਰੋਟੀਨ ਸੰਸਲੇਸ਼ਣ', 'ਕੂੜਾ ਨਿਪਟਾਰਾ'], correctAnswer: 1 },
        { id: 'bq1q4', text: 'Which of these is found in plant cells but not animal cells?', punjabiText: 'ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੌਦਾ ਸੈੱਲਾਂ ਵਿੱਚ ਪਾਇਆ ਜਾਂਦਾ ਹੈ ਪਰ ਜਾਨਵਰ ਸੈੱਲਾਂ ਵਿੱਚ ਨਹੀਂ?', type: 'mcq', options: ['Cell Wall', 'Mitochondria', 'Nucleus'], punjabiOptions: ['ਸੈੱਲ ਕੰਧ', 'ਮਾਈਟੋਕਾਂਡਰੀਆ', 'ਨਿਊਕਲੀਅਸ'], correctAnswer: 0 },
        { id: 'bq1q5', text: 'What is the jelly-like substance that fills the cell?', punjabiText: 'ਸੈੱਲ ਨੂੰ ਭਰਨ ਵਾਲਾ ਜੈਲੀ ਵਰਗਾ ਪਦਾਰਥ ਕੀ ਹੈ?', type: 'mcq', options: ['Nucleus', 'Cytoplasm', 'Vacuole'], punjabiOptions: ['ਨਿਊਕਲੀਅਸ', 'ਸਾਈਟੋਪਲਾਜ਼ਮ', 'ਵੈਕਿਊਲ'], correctAnswer: 1 },
        { id: 'bq1q6', text: 'What is the main function of the cell membrane?', punjabiText: 'ਸੈੱਲ ਝਿੱਲੀ ਦਾ ਮੁੱਖ ਕੰਮ ਕੀ ਹੈ?', type: 'mcq', options: ['To produce energy', 'To control what enters and leaves the cell', 'To store water'], punjabiOptions: ['ਊਰਜਾ ਪੈਦਾ ਕਰਨਾ', 'ਸੈੱਲ ਵਿੱਚ ਕੀ ਦਾਖਲ ਹੁੰਦਾ ਹੈ ਅਤੇ ਕੀ ਬਾਹਰ ਜਾਂਦਾ ਹੈ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਨਾ', 'ਪਾਣੀ ਨੂੰ ਸਟੋਰ ਕਰਨਾ'], correctAnswer: 1 },
        { id: 'bq1q7', text: 'Photosynthesis occurs in which organelle?', punjabiText: 'ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਕਿਸ ਆਰਗਨੇਲ ਵਿੱਚ ਹੁੰਦਾ ਹੈ?', type: 'mcq', options: ['Mitochondria', 'Chloroplast', 'Ribosome'], punjabiOptions: ['ਮਾਈਟੋਕਾਂਡਰੀਆ', 'ਕਲੋਰੋਪਲਾਸਟ', 'ਰਾਈਬੋਸੋਮ'], correctAnswer: 1 },
        { id: 'bq1q8', text: 'Which organelle is responsible for breaking down waste?', punjabiText: 'ਕਿਹੜਾ ਆਰਗਨੇਲ ਕੂੜੇ ਨੂੰ ਤੋੜਨ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਹੈ?', type: 'mcq', options: ['Lysosome', 'Golgi apparatus', 'Endoplasmic reticulum'], punjabiOptions: ['ਲਾਈਸੋਸੋਮ', 'ਗੋਲਗੀ ਉਪਕਰਣ', 'ਐਂਡੋਪਲਾਜ਼ਮਿਕ ਰੈਟੀਕੁਲਮ'], correctAnswer: 0 },
        { id: 'bq1q9', text: 'What are the basic building blocks of life?', punjabiText: 'ਜੀਵਨ ਦੇ ਮੁੱਢਲੇ ਨਿਰਮਾਣ ਬਲਾਕ ਕੀ ਹਨ?', type: 'mcq', options: ['Tissues', 'Organs', 'Cells'], punjabiOptions: ['ਟਿਸ਼ੂ', 'ਅੰਗ', 'ਸੈੱਲ'], correctAnswer: 2 },
        { id: 'bq1q10', text: 'Which of these is a prokaryotic cell?', punjabiText: 'ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਇੱਕ ਪ੍ਰੋਕੈਰੀਓਟਿਕ ਸੈੱਲ ਹੈ?', type: 'mcq', options: ['Bacteria', 'Plant cell', 'Animal cell'], punjabiOptions: ['ਬੈਕਟੀਰੀਆ', 'ਪੌਦਾ ਸੈੱਲ', 'ਜਾਨਵਰ ਸੈੱਲ'], correctAnswer: 0 },
        { id: 'bq1q11', text: 'The large storage sac in a plant cell is the:', punjabiText: 'ਇੱਕ ਪੌਦਾ ਸੈੱਲ ਵਿੱਚ ਵੱਡਾ ਸਟੋਰੇਜ ਥੈਲਾ ਹੈ:', type: 'mcq', options: ['Nucleus', 'Central Vacuole', 'Chloroplast'], punjabiOptions: ['ਨਿਊਕਲੀਅਸ', 'ਕੇਂਦਰੀ ਵੈਕਿਊਲ', 'ਕਲੋਰੋਪਲਾਸਟ'], correctAnswer: 1 },
        { id: 'bq1q12', text: 'What does DNA stand for?', punjabiText: 'DNA ਦਾ ਪੂਰਾ ਨਾਮ ਕੀ ਹੈ?', type: 'mcq', options: ['Deoxyribonucleic acid', 'Ribonucleic acid', 'Deoxyribo nutrient acid'], punjabiOptions: ['ਡੀਆਕਸੀਰਾਈਬੋਨਿਊਕਲਿਕ ਐਸਿਡ', 'ਰਾਈਬੋਨਿਊਕਲਿਕ ਐਸਿਡ', 'ਡੀਆਕਸੀਰਾਈਬੋ ਪੋਸ਼ਕ ਤੱਤ ਐਸਿਡ'], correctAnswer: 0 },
        { id: 'bq1q13', text: 'Which organelle packages and ships proteins?', punjabiText: 'ਕਿਹੜਾ ਆਰਗਨੇਲ ਪ੍ਰੋਟੀਨ ਨੂੰ ਪੈਕੇਜ ਅਤੇ ਭੇਜਦਾ ਹੈ?', type: 'mcq', options: ['Ribosome', 'Golgi apparatus', 'Mitochondria'], punjabiOptions: ['ਰਾਈਬੋਸੋਮ', 'ਗੋਲਗੀ ਉਪਕਰਣ', 'ਮਾਈਟੋਕਾਂਡਰੀਆ'], correctAnswer: 1 },
        { id: 'bq1q14', text: 'The process of cell division is called:', punjabiText: 'ਸੈੱਲ ਵੰਡ ਦੀ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ:', type: 'mcq', options: ['Mitosis', 'Meiosis', 'Photosynthesis'], punjabiOptions: ['ਮਾਈਟੋਸਿਸ', 'ਮਿਓਸਿਸ', 'ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ'], correctAnswer: 0 },
        { id: 'bq1q15', text: 'What gives plant cells their rigid structure?', punjabiText: 'ਕੀ ਪੌਦਾ ਸੈੱਲਾਂ ਨੂੰ ਉਹਨਾਂ ਦੀ ਸਖ਼ਤ ਬਣਤਰ ਦਿੰਦਾ ਹੈ?', type: 'mcq', options: ['Cell membrane', 'Cytoplasm', 'Cell wall'], punjabiOptions: ['ਸੈੱਲ ਝਿੱਲੀ', 'ਸਾਈਟੋਪਲਾਜ਼ਮ', 'ਸੈੱਲ ਕੰਧ'], correctAnswer: 2 },
        { id: 'bq1q16', text: 'Humans are made of which type of cells?', punjabiText: 'ਮਨੁੱਖ ਕਿਸ ਕਿਸਮ ਦੇ ਸੈੱਲਾਂ ਦੇ ਬਣੇ ਹੁੰਦੇ ਹਨ?', type: 'mcq', options: ['Prokaryotic', 'Eukaryotic', 'Bacterial'], punjabiOptions: ['ਪ੍ਰੋਕੈਰੀਓਟਿਕ', 'ਯੂਕੇਰੀਓਟਿਕ', 'ਬੈਕਟੀਰੀਅਲ'], correctAnswer: 1 },
        { id: 'bq1q17', text: 'What is the control center of the cell?', punjabiText: 'ਸੈੱਲ ਦਾ ਕੰਟਰੋਲ ਕੇਂਦਰ ਕੀ ਹੈ?', type: 'mcq', options: ['Nucleus', 'Mitochondria', 'Cytoplasm'], punjabiOptions: ['ਨਿਊਕਲੀਅਸ', 'ਮਾਈਟੋਕਾਂਡਰੀਆ', 'ਸਾਈਟੋਪਲਾਜ਼ਮ'], correctAnswer: 0 },
        { id: 'bq1q18', text: 'Which of these is NOT part of the cell theory?', punjabiText: 'ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਸੈੱਲ ਸਿਧਾਂਤ ਦਾ ਹਿੱਸਾ ਨਹੀਂ ਹੈ?', type: 'mcq', options: ['All living things are made of cells', 'Cells are the basic unit of life', 'All cells have a nucleus'], punjabiOptions: ['ਸਾਰੀਆਂ ਜੀਵਿਤ ਚੀਜ਼ਾਂ ਸੈੱਲਾਂ ਦੀਆਂ ਬਣੀਆਂ ਹੁੰਦੀਆਂ ਹਨ', 'ਸੈੱਲ ਜੀਵਨ ਦੀ ਮੁੱਢਲੀ ਇਕਾਈ ਹਨ', 'ਸਾਰੇ ਸੈੱਲਾਂ ਵਿੱਚ ਇੱਕ ਨਿਊਕਲੀਅਸ ਹੁੰਦਾ ਹੈ'], correctAnswer: 2 },
        { id: 'bq1q19', text: 'The network of tubes that transports materials is the:', punjabiText: 'ਸਮੱਗਰੀ ਦੀ ਢੋਆ-ਢੁਆਈ ਕਰਨ ਵਾਲੇ ਟਿਊਬਾਂ ਦਾ ਨੈੱਟਵਰਕ ਹੈ:', type: 'mcq', options: ['Golgi apparatus', 'Endoplasmic reticulum', 'Lysosome'], punjabiOptions: ['ਗੋਲਗੀ ਉਪਕਰਣ', 'ਐਂਡੋਪਲਾਜ਼ਮਿਕ ਰੈਟੀਕੁਲਮ', 'ਲਾਈਸੋਸੋਮ'], correctAnswer: 1 },
        { id: 'bq1q20', text: 'What is the green pigment in plant cells called?', punjabiText: 'ਪੌਦਾ ਸੈੱਲਾਂ ਵਿੱਚ ਹਰੇ ਰੰਗ ਦੇ ਪਿਗਮੈਂਟ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?', type: 'mcq', options: ['Chlorophyll', 'Cyanide', 'Chloroplast'], punjabiOptions: ['ਕਲੋਰੋਫਿਲ', 'ਸਾਈਨਾਈਡ', 'ਕਲੋਰੋਪਲਾਸਟ'], correctAnswer: 0 }
    ]
};
const PUNJABI_QUIZ_1: Quiz = {
    id: 'puq1',
    title: 'Punjabi Grammar Quiz',
    punjabiTitle: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਕਵਿਜ਼',
    questions: [
        { id: 'puq1q1', text: 'ਕ੍ਰਿਆ ਕੀ ਹੈ?', punjabiText: 'ਕ੍ਰਿਆ ਕੀ ਹੈ?', type: 'mcq', options: ['ਨਾਮ', 'ਪੜਨਾਂਵ', 'ਕੰਮ'], punjabiOptions: ['ਨਾਮ', 'ਪੜਨਾਂਵ', 'ਕੰਮ'], correctAnswer: 2 },
        { id: 'puq1q2', text: 'ਜੋ ਸ਼ਬਦ ਨਾਂਵ ਦੀ ਥਾਂ ਵਰਤਿਆ ਜਾਵੇ, ਉਸਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?', punjabiText: 'ਜੋ ਸ਼ਬਦ ਨਾਂਵ ਦੀ ਥਾਂ ਵਰਤਿਆ ਜਾਵੇ, ਉਸਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?', type: 'mcq', options: ['ਵਿਸ਼ੇਸ਼ਣ', 'ਪੜਨਾਂਵ', 'ਕਿਰਿਆ'], punjabiOptions: ['ਵਿਸ਼ੇਸ਼ਣ', 'ਪੜਨਾਂਵ', 'ਕਿਰਿਆ'], correctAnswer: 1 },
        { id: 'puq1q3', text: 'ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕਿੰਨੇ ਅੱਖਰ ਹਨ?', punjabiText: 'ਪੰਜਾਬੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕਿੰਨੇ ਅੱਖਰ ਹਨ?', type: 'mcq', options: ['35', '40', '41'], punjabiOptions: ['35', '40', '41'], correctAnswer: 2 },
        { id: 'puq1q4', text: 'ਜੋ ਸ਼ਬਦ ਨਾਂਵ ਜਾਂ ਪੜਨਾਂਵ ਦੀ ਵਿਸ਼ੇਸ਼ਤਾ ਦੱਸੇ, ਉਸਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?', punjabiText: 'ਜੋ ਸ਼ਬਦ ਨਾਂਵ ਜਾਂ ਪੜਨਾਂਵ ਦੀ ਵਿਸ਼ੇਸ਼ਤਾ ਦੱਸੇ, ਉਸਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?', type: 'mcq', options: ['ਵਿਸ਼ੇਸ਼ਣ', 'ਸੰਬੰਧਕ', 'ਯੋਜਕ'], punjabiOptions: ['ਵਿਸ਼ੇਸ਼ਣ', 'ਸੰਬੰਧਕ', 'ਯੋਜਕ'], correctAnswer: 0 },
        { id: 'puq1q5', text: '‘ਉਹ’ ਕਿਹੜਾ ਪੁਰਖ ਹੈ?', punjabiText: '‘ਉਹ’ ਕਿਹੜਾ ਪੁਰਖ ਹੈ?', type: 'mcq', options: ['ਪਹਿਲਾ ਪੁਰਖ', 'ਦੂਜਾ ਪੁਰਖ', 'ਤੀਜਾ ਪੁਰਖ'], punjabiOptions: ['ਪਹਿਲਾ ਪੁਰਖ', 'ਦੂਜਾ ਪੁਰਖ', 'ਤੀਜਾ ਪੁਰਖ'], correctAnswer: 2 },
        { id: 'puq1q6', text: 'ਲਿੰਗ ਕਿੰਨੀ ਪ੍ਰਕਾਰ ਦੇ ਹੁੰਦੇ ਹਨ?', punjabiText: 'ਲਿੰਗ ਕਿੰਨੀ ਪ੍ਰਕਾਰ ਦੇ ਹੁੰਦੇ ਹਨ?', type: 'mcq', options: ['ਦੋ', 'ਤਿੰਨ', 'ਚਾਰ'], punjabiOptions: ['ਦੋ', 'ਤਿੰਨ', 'ਚਾਰ'], correctAnswer: 0 },
        { id: 'puq1q7', text: '‘ਮੁੰਡਾ’ ਸ਼ਬਦ ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?', punjabiText: '‘ਮੁੰਡਾ’ ਸ਼ਬਦ ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?', type: 'mcq', options: ['ਮੁੰਡੀ', 'ਕੁੜੀ', 'ਬਾਲਿਕਾ'], punjabiOptions: ['ਮੁੰਡੀ', 'ਕੁੜੀ', 'ਬਾਲਿਕਾ'], correctAnswer: 1 },
        { id: 'puq1q8', text: 'ਵਚਨ ਕਿੰਨੀ ਪ੍ਰਕਾਰ ਦੇ ਹੁੰਦੇ ਹਨ?', punjabiText: 'ਵਚਨ ਕਿੰਨੀ ਪ੍ਰਕਾਰ ਦੇ ਹੁੰਦੇ ਹਨ?', type: 'mcq', options: ['ਇੱਕ', 'ਦੋ', 'ਤਿੰਨ'], punjabiOptions: ['ਇੱਕ', 'ਦੋ', 'ਤਿੰਨ'], correctAnswer: 1 },
        { id: 'puq1q9', text: '‘ਕਿਤਾਬ’ ਦਾ ਬਹੁ-ਵਚਨ ਕੀ ਹੈ?', punjabiText: '‘ਕਿਤਾਬ’ ਦਾ ਬਹੁ-ਵਚਨ ਕੀ ਹੈ?', type: 'mcq', options: ['ਕਿਤਾਬਾਂ', 'ਕਿਤਾਬੋਂ', 'ਕਿਤਾਬੇ'], punjabiOptions: ['ਕਿਤਾਬਾਂ', 'ਕਿਤਾਬੋਂ', 'ਕਿਤਾਬੇ'], correctAnswer: 0 },
        { id: 'puq1q10', text: 'ਕਾਰਕ ਕਿੰਨੀ ਪ੍ਰਕਾਰ ਦੇ ਹੁੰਦੇ ਹਨ?', punjabiText: 'ਕਾਰਕ ਕਿੰਨੀ ਪ੍ਰਕਾਰ ਦੇ ਹੁੰਦੇ ਹਨ?', type: 'mcq', options: ['ਛੇ', 'ਸੱਤ', 'ਅੱਠ'], punjabiOptions: ['ਛੇ', 'ਸੱਤ', 'ਅੱਠ'], correctAnswer: 2 },
        { id: 'puq1q11', text: '‘ਨੇ’ ਕਿਹੜਾ ਕਾਰਕ ਹੈ?', punjabiText: '‘ਨੇ’ ਕਿਹੜਾ ਕਾਰਕ ਹੈ?', type: 'mcq', options: ['ਕਰਤਾ ਕਾਰਕ', 'ਕਰਮ ਕਾਰਕ', 'ਕਰਨ ਕਾਰਕ'], punjabiOptions: ['ਕਰਤਾ ਕਾਰਕ', 'ਕਰਮ ਕਾਰਕ', 'ਕਰਨ ਕਾਰਕ'], correctAnswer: 0 },
        { id: 'puq1q12', text: 'ਕਾਲ ਕਿੰਨੀ ਪ੍ਰਕਾਰ ਦੇ ਹੁੰਦੇ ਹਨ?', punjabiText: 'ਕਾਲ ਕਿੰਨੀ ਪ੍ਰਕਾਰ ਦੇ ਹੁੰਦੇ ਹਨ?', type: 'mcq', options: ['ਦੋ', 'ਤਿੰਨ', 'ਚਾਰ'], punjabiOptions: ['ਦੋ', 'ਤਿੰਨ', 'ਚਾਰ'], correctAnswer: 1 },
        { id: 'puq1q13', text: '‘ਉਹ ਖੇਡ ਰਿਹਾ ਹੈ।’ - ਇਹ ਕਿਹੜਾ ਕਾਲ ਹੈ?', punjabiText: '‘ਉਹ ਖੇਡ ਰਿਹਾ ਹੈ।’ - ਇਹ ਕਿਹੜਾ ਕਾਲ ਹੈ?', type: 'mcq', options: ['ਭੂਤਕਾਲ', 'ਵਰਤਮਾਨ ਕਾਲ', 'ਭਵਿੱਖਤ ਕਾਲ'], punjabiOptions: ['ਭੂਤਕਾਲ', 'ਵਰਤਮਾਨ ਕਾਲ', 'ਭਵਿੱਖਤ ਕਾਲ'], correctAnswer: 1 },
        { id: 'puq1q14', text: 'ਜੋ ਸ਼ਬਦ ਦੋ ਸ਼ਬਦਾਂ ਜਾਂ ਵਾਕਾਂ ਨੂੰ ਜੋੜੇ, ਉਸਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?', punjabiText: 'ਜੋ ਸ਼ਬਦ ਦੋ ਸ਼ਬਦਾਂ ਜਾਂ ਵਾਕਾਂ ਨੂੰ ਜੋੜੇ, ਉਸਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?', type: 'mcq', options: ['ਸੰਬੰਧਕ', 'ਯੋਜਕ', 'ਵਿਸਮਿਕ'], punjabiOptions: ['ਸੰਬੰਧਕ', 'ਯੋਜਕ', 'ਵਿਸਮਿਕ'], correctAnswer: 1 },
        { id: 'puq1q15', text: '‘ਹਾਏ!’ ਕਿਹੜਾ ਵਿਸਮਿਕ ਹੈ?', punjabiText: '‘ਹਾਏ!’ ਕਿਹੜਾ ਵਿਸਮਿਕ ਹੈ?', type: 'mcq', options: ['ਖੁਸ਼ੀ ਦਾ', 'ਗਮੀ ਦਾ', 'ਹੈਰਾਨੀ ਦਾ'], punjabiOptions: ['ਖੁਸ਼ੀ ਦਾ', 'ਗਮੀ ਦਾ', 'ਹੈਰਾਨੀ ਦਾ'], correctAnswer: 1 },
        { id: 'puq1q16', text: '‘ਘੋੜਾ’ ਸ਼ਬਦ ਦਾ ਸਹੀ ਲਿੰਗ ਬਦਲੋ।', punjabiText: '‘ਘੋੜਾ’ ਸ਼ਬਦ ਦਾ ਸਹੀ ਲਿੰਗ ਬਦਲੋ।', type: 'mcq', options: ['ਘੋੜੀ', 'ਘੋੜੇ', 'ਘੋੜੀਆਂ'], punjabiOptions: ['ਘੋੜੀ', 'ਘੋੜੇ', 'ਘੋੜੀਆਂ'], correctAnswer: 0 },
        { id: 'puq1q17', text: '‘ਅਧਿਆਪਕ’ ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?', punjabiText: '‘ਅਧਿਆਪਕ’ ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?', type: 'mcq', options: ['ਅਧਿਆਪਕਾ', 'ਅਧਿਆਪਕੀ', 'ਅਧਿਆਪਕਣ'], punjabiOptions: ['ਅਧਿਆਪਕਾ', 'ਅਧਿਆਪਕੀ', 'ਅਧਿਆਪਕਣ'], correctAnswer: 0 },
        { id: 'puq1q18', text: '‘ਮੈਂ’ ਕਿਹੜਾ ਪੁਰਖ ਹੈ?', punjabiText: '‘ਮੈਂ’ ਕਿਹੜਾ ਪੁਰਖ ਹੈ?', type: 'mcq', options: ['ਪਹਿਲਾ ਪੁਰਖ', 'ਦੂਜਾ ਪੁਰਖ', 'ਤੀਜਾ ਪੁਰਖ'], punjabiOptions: ['ਪਹਿਲਾ ਪੁਰਖ', 'ਦੂਜਾ ਪੁਰਖ', 'ਤੀਜਾ ਪੁਰਖ'], correctAnswer: 0 },
        { id: 'puq1q19', text: '‘ਸੁੰਦਰ’ ਸ਼ਬਦ ਕੀ ਹੈ?', punjabiText: '‘ਸੁੰਦਰ’ ਸ਼ਬਦ ਕੀ ਹੈ?', type: 'mcq', options: ['ਨਾਂਵ', 'ਪੜਨਾਂਵ', 'ਵਿਸ਼ੇਸ਼ਣ'], punjabiOptions: ['ਨਾਂਵ', 'ਪੜਨਾਂਵ', 'ਵਿਸ਼ੇਸ਼ਣ'], correctAnswer: 2 },
        { id: 'puq1q20', text: '‘ਅਤੇ’ ਸ਼ਬਦ ਕੀ ਹੈ?', punjabiText: '‘ਅਤੇ’ ਸ਼ਬਦ ਕੀ ਹੈ?', type: 'mcq', options: ['ਸੰਬੰਧਕ', 'ਯੋਜਕ', 'ਵਿਸਮਿਕ'], punjabiOptions: ['ਸੰਬੰਧਕ', 'ਯੋਜਕ', 'ਵਿਸਮਿਕ'], correctAnswer: 1 }
    ]
};



// --- SUBJECTS ---
export const SUBJECTS_DATA: Subject[] = [
  // NCERT Stream
  {
    id: 'math-ncert',
    name: 'Mathematics',
    punjabiName: 'ਗਣਿਤ',
    icon: BookOpenIcon,
    stream: Stream.NCERT,
    chapters: [
      { id: 'm1-ncert', title: 'Algebra Basics', punjabiTitle: 'ਅਲਜਬਰਾ ਬੇਸਿਕਸ', videoUrl: 'https://www.youtube.com/embed/NybHckSEQBI', pdfUrl: '#', quiz: MATH_QUIZ_1, completed: true },
      { id: 'm2-ncert', title: 'Geometry', punjabiTitle: 'ਜਿਓਮੈਟਰੀ', videoUrl: 'https://www.youtube.com/embed/AwiuycM2F5o', pdfUrl: '#', quiz: MATH_QUIZ_1, completed: false },
    ],
  },
  {
    id: 'physics-ncert',
    name: 'Physics',
    punjabiName: 'ਭੌਤਿਕ ਵਿਗਿਆਨ',
    icon: BookOpenIcon,
    stream: Stream.NCERT,
    chapters: [
        { id: 'p1-ncert', title: 'Laws of Motion', punjabiTitle: 'ਗਤੀ ਦੇ ਨਿਯਮ', videoUrl: 'https://www.youtube.com/embed/kKKM8Y-u7ds', pdfUrl: '#', quiz: PHYSICS_QUIZ_1, completed: true },
    ],
  },
  {
    id: 'chemistry-ncert',
    name: 'Chemistry',
    punjabiName: 'ਰਸਾਇਣ ਵਿਗਿਆਨ',
    icon: BookOpenIcon,
    stream: Stream.NCERT,
    chapters: [
        { id: 'c1-ncert', title: 'Periodic Table', punjabiTitle: 'ਆਵਰਤੀ ਸਾਰਣੀ', videoUrl: 'https://www.youtube.com/embed/0RRVV4DiA_E', pdfUrl: '#', quiz: CHEMISTRY_QUIZ_1, completed: false },
    ],
  },
  {
    id: 'biology-ncert',
    name: 'Biology',
    punjabiName: 'ਜੀਵ ਵਿਗਿਆਨ',
    icon: BookOpenIcon,
    stream: Stream.NCERT,
    chapters: [
        { id: 'b1-ncert', title: 'Cell Structure', punjabiTitle: 'ਸੈੱਲ ਬਣਤਰ', videoUrl: 'https://www.youtube.com/embed/8IlzKri08kk', pdfUrl: '#', quiz: BIOLOGY_QUIZ_1, completed: false },
    ],
  },
  
  // PSEB Stream
  {
    id: 'math-pseb',
    name: 'Mathematics',
    punjabiName: 'ਗਣਿਤ',
    icon: BookOpenIcon,
    stream: Stream.PSEB,
    chapters: [
      { id: 'm1-pseb', title: 'Advanced Algebra', punjabiTitle: 'ਉੱਨਤ ਅਲਜਬਰਾ', videoUrl: 'https://www.youtube.com/embed/i6G53BMlDMo', pdfUrl: '#', quiz: MATH_QUIZ_1, completed: false },
      { id: 'm2-pseb', title: 'Trigonometry', punjabiTitle: 'ਤ੍ਰਿਕੋਣਮਿਤੀ', videoUrl: 'https://www.youtube.com/embed/_9gVa0_t_8', pdfUrl: '#', quiz: MATH_QUIZ_1, completed: false },
    ],
  },
   {
    id: 'science-pseb',
    name: 'Science',
    punjabiName: 'ਵਿਗਿਆਨ',
    icon: BookOpenIcon,
    stream: Stream.PSEB,
    chapters: [
        { id: 's1-pseb', title: 'Light and Reflection', punjabiTitle: 'ਪ੍ਰਕਾਸ਼ ਅਤੇ ਪ੍ਰਤੀਬਿੰਬ', videoUrl: 'https://www.youtube.com/embed/T-g-JBa1-hM', pdfUrl: '#', quiz: PHYSICS_QUIZ_1, completed: false },
    ],
  },
  {
    id: 'social-pseb',
    name: 'Social Studies',
    punjabiName: 'ਸਮਾਜਿਕ ਵਿਗਿਆਨ',
    icon: BookOpenIcon,
    stream: Stream.PSEB,
    chapters: [
        { id: 'ss1-pseb', title: 'History of Punjab', punjabiTitle: 'ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ', videoUrl: 'https://www.youtube.com/embed/5F46qfS-L_s', pdfUrl: '#', quiz: CHEMISTRY_QUIZ_1, completed: false },
    ],
  },
  {
    id: 'punjabi-pseb',
    name: 'Punjabi',
    punjabiName: 'ਪੰਜਾਬੀ',
    icon: BookOpenIcon,
    stream: Stream.PSEB,
    chapters: [
        { id: 'pu1-pseb', title: 'Punjabi Grammar', punjabiTitle: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ', videoUrl: 'https://www.youtube.com/embed/L-Gz54G8yYI', pdfUrl: '#', quiz: PUNJABI_QUIZ_1, completed: true },
        { id: 'pu2-pseb', title: 'Modern Punjabi Poetry', punjabiTitle: 'ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਕਵਿਤਾ', videoUrl: 'https://www.youtube.com/embed/k-50L_7P4oU', pdfUrl: '#', quiz: PUNJABI_QUIZ_1, completed: false },
    ],
  },
];


// --- DOUBTS ---
export const DOUBTS_DATA: Doubt[] = [
    { 
        id: 'd1', 
        studentId: 's2', 
        subject: 'Mathematics',
        punjabiSubject: 'ਗਣਿਤ', 
        chapter: 'Algebra Basics',
        punjabiChapter: 'ਅਲਜਬਰਾ ਬੇਸਿਕਸ',
        question: 'I am having trouble understanding the concept of variables.', 
        punjabiQuestion: 'ਮੈਨੂੰ ਵੇਰੀਏਬਲਾਂ ਦੀ ਧਾਰਨਾ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮੁਸ਼ਕਲ ਆ ਰਹੀ ਹੈ।',
        isResolved: true, 
        answer: "Variables are like containers for numbers. Think of 'x' as a box where you can put any number to solve an equation.",
        punjabiAnswer: "ਵੇਰੀਏਬਲ ਸੰਖਿਆਵਾਂ ਲਈ ਕੰਟੇਨਰਾਂ ਵਾਂਗ ਹੁੰਦੇ ਹਨ। 'x' ਨੂੰ ਇੱਕ ਬਕਸੇ ਵਜੋਂ ਸੋਚੋ ਜਿੱਥੇ ਤੁਸੀਂ ਕਿਸੇ ਸਮੀਕਰਨ ਨੂੰ ਹੱਲ ਕਰਨ ਲਈ ਕੋਈ ਵੀ ਸੰਖਿਆ ਪਾ ਸਕਦੇ ਹੋ।", 
        timestamp: '2024-05-20T10:00:00Z' 
    },
    { 
        id: 'd2', 
        studentId: 's1', 
        subject: 'Physics', 
        punjabiSubject: 'ਭੌਤਿਕ ਵਿਗਿਆਨ',
        chapter: 'Laws of Motion',
        punjabiChapter: 'ਗਤੀ ਦੇ ਨਿਯਮ',
        question: 'Can you explain the third law of motion with a real-world example?', 
        punjabiQuestion: 'ਕੀ ਤੁਸੀਂ ਗਤੀ ਦੇ ਤੀਜੇ ਨਿਯਮ ਨੂੰ ਅਸਲ-ਸੰਸਾਰ ਦੀ ਉਦਾਹਰਣ ਨਾਲ ਸਮਝਾ ਸਕਦੇ ਹੋ?',
        isResolved: false, 
        timestamp: '2024-05-21T14:30:00Z' 
    },
    { 
        id: 'd3', 
        studentId: 's3', 
        subject: 'Chemistry',
        punjabiSubject: 'ਰਸਾਇਣ ਵਿਗਿਆਨ', 
        chapter: 'Periodic Table',
        punjabiChapter: 'ਆਵਰਤੀ ਸਾਰਣੀ',
        question: 'Why are noble gases so unreactive? I understand they have a full outer shell, but what does that mean chemically?', 
        punjabiQuestion: 'ਨੋਬਲ ਗੈਸਾਂ ਇੰਨੀਆਂ ਅਪ੍ਰਤੀਕਿਰਿਆਸ਼ੀਲ ਕਿਉਂ ਹੁੰਦੀਆਂ ਹਨ? ਮੈਂ ਸਮਝਦਾ ਹਾਂ ਕਿ ਉਹਨਾਂ ਕੋਲ ਇੱਕ ਪੂਰਾ ਬਾਹਰੀ ਸ਼ੈੱਲ ਹੈ, ਪਰ ਇਸਦਾ ਰਸਾਇਣਕ ਤੌਰ \'ਤੇ ਕੀ ਅਰਥ ਹੈ?',
        isResolved: false, 
        timestamp: '2024-05-22T09:00:00Z'
    },
    { 
        id: 'd4', 
        studentId: 's1', 
        subject: 'Biology', 
        punjabiSubject: 'ਜੀਵ ਵਿਗਿਆਨ',
        chapter: 'Cell Structure', 
        punjabiChapter: 'ਸੈੱਲ ਬਣਤਰ',
        question: 'What is the main difference between plant cells and animal cells?',
        punjabiQuestion: 'ਪੌਦਿਆਂ ਦੇ ਸੈੱਲਾਂ ਅਤੇ ਜਾਨਵਰਾਂ ਦੇ ਸੈੱਲਾਂ ਵਿੱਚ ਮੁੱਖ ਅੰਤਰ ਕੀ ਹੈ?', 
        isResolved: true, 
        answer: 'Great question! There are three key differences: \n1. **Cell Wall:** Plant cells have a rigid cell wall outside the cell membrane for structural support, which animal cells lack. \n2. **Chloroplasts:** Plant cells have chloroplasts, which are the sites of photosynthesis. Animal cells do not perform photosynthesis and thus don\'t have them. \n3. **Vacuole:** Plant cells typically have one large central vacuole that stores water and maintains turgor pressure. Animal cells might have several small vacuoles, but not a large central one.',
        punjabiAnswer: 'ਬਹੁਤ ਵਧੀਆ ਸਵਾਲ! ਤਿੰਨ ਮੁੱਖ ਅੰਤਰ ਹਨ: \n1. **ਸੈੱਲ ਦੀਵਾਰ:** ਪੌਦਿਆਂ ਦੇ ਸੈੱਲਾਂ ਵਿੱਚ ਢਾਂਚਾਗਤ ਸਹਾਇਤਾ ਲਈ ਸੈੱਲ ਝਿੱਲੀ ਦੇ ਬਾਹਰ ਇੱਕ ਸਖ਼ਤ ਸੈੱਲ ਦੀਵਾਰ ਹੁੰਦੀ ਹੈ, ਜੋ ਜਾਨਵਰਾਂ ਦੇ ਸੈੱਲਾਂ ਵਿੱਚ ਨਹੀਂ ਹੁੰਦੀ। \n2. **ਕਲੋਰੋਪਲਾਸਟ:** ਪੌਦਿਆਂ ਦੇ ਸੈੱਲਾਂ ਵਿੱਚ ਕਲੋਰੋਪਲਾਸਟ ਹੁੰਦੇ ਹਨ, ਜੋ ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਦੇ ਸਥਾਨ ਹਨ। ਜਾਨਵਰਾਂ ਦੇ ਸੈੱਲ ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਨਹੀਂ ਕਰਦੇ ਅਤੇ ਇਸ ਲਈ ਉਹਨਾਂ ਕੋਲ ਇਹ ਨਹੀਂ ਹੁੰਦੇ। \n3. **ਵੈਕਿਊਲ:** ਪੌਦਿਆਂ ਦੇ ਸੈੱਲਾਂ ਵਿੱਚ ਆਮ ਤੌਰ \'ਤੇ ਇੱਕ ਵੱਡਾ ਕੇਂਦਰੀ ਵੈਕਿਊਲ ਹੁੰਦਾ ਹੈ ਜੋ ਪਾਣੀ ਨੂੰ ਸਟੋਰ ਕਰਦਾ ਹੈ ਅਤੇ ਟਰਗਰ ਦਬਾਅ ਬਣਾਈ ਰੱਖਦਾ ਹੈ। ਜਾਨਵਰਾਂ ਦੇ ਸੈੱਲਾਂ ਵਿੱਚ ਕਈ ਛੋਟੇ ਵੈਕਿਊਲ ਹੋ ਸਕਦੇ ਹਨ, ਪਰ ਇੱਕ ਵੱਡਾ ਕੇਂਦਰੀ ਨਹੀਂ।', 
        timestamp: '2024-05-21T11:00:00Z'
    },
];

// --- CONTESTS ---
export const CONTESTS_DATA: Contest[] = [
    { id: 'c1', subject: 'Physics', title: 'Physics Olympiad Prep', questions: PHYSICS_QUIZ_1.questions, durationMinutes: 15, leaderboard: [{ studentId: 's1', score: 100 }, { studentId: 's2', score: 80 }, { studentId: 's3', score: 75 }] },
    { id: 'c2', subject: 'Mathematics', title: 'Math Genius Weekly', questions: MATH_QUIZ_1.questions, durationMinutes: 10, leaderboard: [{ studentId: 's2', score: 95 }, { studentId: 's1', score: 90 }, { studentId: 's3', score: 88 }] },
];

// --- STUDENT PERFORMANCE ---
export const STUDENT_PERFORMANCE_DATA: StudentPerformance[] = [
    { studentId: 's1', quizScores: { 'mq1': 90, 'pq1': 100 }, videoViews: { 'm1': true, 'p1': true }, quizAttempts: { 'mq1': true, 'pq1': true }, weakAreas: ['Geometry'] },
    { studentId: 's2', quizScores: { 'mq1': 95 }, videoViews: { 'm1': true }, quizAttempts: { 'mq1': true }, weakAreas: ['Advanced Algebra'] },
    { studentId: 's3', quizScores: { 'cq1': 85 }, videoViews: { 'c1': true }, quizAttempts: { 'cq1': true }, weakAreas: ['Chemical Bonds'] },
];

// --- RESOURCES ---
export const RESOURCES_DATA: Resource[] = [
    { id: 'r1', title: 'Khan Academy', type: 'link', url: 'https://www.khanacademy.org/', description: 'Free online courses, lessons, and practice.'},
    { id: 'r2', title: 'NCERT Textbooks', type: 'pdf', url: 'https://ncert.nic.in/textbook.php', description: 'Official NCERT textbooks available for download.'},
];

// --- FAQ ---
export const FAQ_DATA: FaqItem[] = [
    { id: 'faq-s1', question: 'How do I track my progress?', answer: 'You can view your completed lessons on the "Lessons" tab and see detailed reports in the "My Reports" section.', for: [UserRole.Student]},
    { id: 'faq-s2', question: 'What happens if I fail a quiz?', answer: 'Don\'t worry! You can retake quizzes as many times as you need to master the material.', for: [UserRole.Student]},
    { id: 'faq-t1', question: 'How can I see which students are struggling?', answer: 'The "Student Progress" dashboard highlights students\' weak areas based on their quiz performance, allowing you to provide targeted help.', for: [UserRole.Teacher]},
];

// --- ATTENDANCE ---
export const ATTENDANCE_DATA: Attendance[] = [
    { studentId: 's1', date: new Date().toISOString().split('T')[0], status: 'present' },
    { studentId: 's2', date: new Date().toISOString().split('T')[0], status: 'absent' },
    { studentId: 's3', date: new Date().toISOString().split('T')[0], status: 'present' },
];

// --- TEXTBOOKS ---
export const TEXTBOOKS_DATA: Textbook[] = [
    // --- NCERT ---
    // Class 10
    { id: 'ncert-10-math', class: 10, subject: 'Mathematics', punjabiSubject: 'ਗਣਿਤ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/jemh1dd.zip' },
    { id: 'ncert-10-science', class: 10, subject: 'Science', punjabiSubject: 'ਵਿਗਿਆਨ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/jesc1dd.zip' },
    { id: 'ncert-10-hist', class: 10, subject: 'History', punjabiSubject: 'ਇਤਿਹਾਸ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/jess3dd.zip' },
    { id: 'ncert-10-eco', class: 10, subject: 'Economics', punjabiSubject: 'ਅਰਥ ਸ਼ਾਸਤਰ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/jess4dd.zip' },
    // Class 9
    { id: 'ncert-9-math', class: 9, subject: 'Mathematics', punjabiSubject: 'ਗਣਿਤ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/iemh1dd.zip' },
    { id: 'ncert-9-science', class: 9, subject: 'Science', punjabiSubject: 'ਵਿਗਿਆਨ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/iesc1dd.zip' },
    // Class 8
    { id: 'ncert-8-math', class: 8, subject: 'Mathematics', punjabiSubject: 'ਗਣਿਤ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/hemh1dd.zip' },
    { id: 'ncert-8-science', class: 8, subject: 'Science', punjabiSubject: 'ਵਿਗਿਆਨ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/hesc1dd.zip' },
    // Class 7
    { id: 'ncert-7-math', class: 7, subject: 'Mathematics', punjabiSubject: 'ਗਣਿਤ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/gemh1dd.zip' },
    // Class 6
    { id: 'ncert-6-math', class: 6, subject: 'Mathematics', punjabiSubject: 'ਗਣਿਤ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/femh1dd.zip' },
    // Class 5
    { id: 'ncert-5-math', class: 5, subject: 'Math-Magic', punjabiSubject: 'ਗਣਿਤ-ਜਾਦੂ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/eemh1dd.zip' },
    { id: 'ncert-5-evs', class: 5, subject: 'Looking Around', punjabiSubject: 'ਆਲੇ-ਦੁਆਲੇ ਦੇਖਣਾ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/eeap1dd.zip' },
    { id: 'ncert-5-eng', class: 5, subject: 'Marigold', punjabiSubject: 'ਮੈਰੀਗੋਲਡ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/eeen1dd.zip' },
    // Class 4
    { id: 'ncert-4-math', class: 4, subject: 'Math-Magic', punjabiSubject: 'ਗਣਿਤ-ਜਾਦੂ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/demh1dd.zip' },
    // Class 3
    { id: 'ncert-3-math', class: 3, subject: 'Math-Magic', punjabiSubject: 'ਗਣਿਤ-ਜਾਦੂ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/cemh1dd.zip' },
    // Class 2
    { id: 'ncert-2-math', class: 2, subject: 'Math-Magic', punjabiSubject: 'ਗਣਿਤ-ਜਾਦੂ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/bemh1dd.zip' },
    // Class 1
    { id: 'ncert-1-math', class: 1, subject: 'Math-Magic', punjabiSubject: 'ਗਣਿਤ-ਜਾਦੂ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/aemh1dd.zip' },
    { id: 'ncert-1-eng', class: 1, subject: 'Marigold', punjabiSubject: 'ਮੈਰੀਗੋਲਡ', stream: Stream.NCERT, url: 'https://ncert.nic.in/textbook/pdf/aeen1dd.zip' },

    // --- PSEB ---
    // Class 10
    { id: 'pseb-10-math', class: 10, subject: 'Mathematics', punjabiSubject: 'ਗਣਿਤ', stream: Stream.PSEB, url: 'https://www.pseb.ac.in/ebooks' },
    { id: 'pseb-10-science', class: 10, subject: 'Science', punjabiSubject: 'ਵਿਗਿਆਨ', stream: Stream.PSEB, url: 'https://www.pseb.ac.in/ebooks' },
    { id: 'pseb-10-sst', class: 10, subject: 'Social Science', punjabiSubject: 'ਸਮਾਜਿਕ ਵਿਗਿਆਨ', stream: Stream.PSEB, url: 'https://www.pseb.ac.in/ebooks' },
    { id: 'pseb-10-punjabi-a', class: 10, subject: 'Punjabi-A', punjabiSubject: 'ਪੰਜਾਬੀ-ਏ', stream: Stream.PSEB, url: 'https://www.pseb.ac.in/ebooks' },
    // Class 5
    { id: 'pseb-5-math', class: 5, subject: 'Mathematics', punjabiSubject: 'ਗਣਿਤ', stream: Stream.PSEB, url: 'https://www.pseb.ac.in/ebooks' },
    { id: 'pseb-5-evs', class: 5, subject: 'Welcome Life', punjabiSubject: 'ਸਵਾਗਤ ਜਿੰਦਗੀ', stream: Stream.PSEB, url: 'https://www.pseb.ac.in/ebooks' },
    { id: 'pseb-5-punjabi', class: 5, subject: 'Punjabi', punjabiSubject: 'ਪੰਜਾਬੀ', stream: Stream.PSEB, url: 'https://www.pseb.ac.in/ebooks' },
     // Class 1
    { id: 'pseb-1-math', class: 1, subject: 'Ganit Di Dunia', punjabiSubject: 'ਗਣਿਤ ਦੀ ਦੁਨੀਆਂ', stream: Stream.PSEB, url: 'https://www.pseb.ac.in/ebooks' },
    { id: 'pseb-1-punjabi', class: 1, subject: 'Punjabi Pustak', punjabiSubject: 'ਪੰਜਾਬੀ ਪੁਸਤਕ', stream: Stream.PSEB, url: 'https://www.pseb.ac.in/ebooks' },
];

// --- CAREER VIEWPOINT ---
export const CAREER_PATHS_DATA: CareerPath[] = [
    {
        id: 'engineer',
        name: 'Software Engineer',
        punjabiName: 'ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰ',
        icon: BriefcaseIcon,
        description: 'Build and create computer systems and applications. Engineers use science and math to solve technical problems.',
        punjabiDescription: 'ਕੰਪਿਊਟਰ ਸਿਸਟਮ ਅਤੇ ਐਪਲੀਕੇਸ਼ਨ ਬਣਾਓ ਅਤੇ ਬਣਾਓ। ਇੰਜੀਨੀਅਰ ਤਕਨੀਕੀ ਸਮੱਸਿਆਵਾਂ ਨੂੰ ਹੱਲ ਕਰਨ ਲਈ ਵਿਗਿਆਨ ਅਤੇ ਗਣਿਤ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ।',
        parentInfo: `An engineering career path is excellent for children who are curious, logical, and enjoy problem-solving. Encourage them by providing building blocks like LEGOs, simple coding games, and visiting science museums. This field offers high job stability and a chance to build the future.`,
        punjabiParentInfo: `ਇੱਕ ਇੰਜੀਨੀਅਰਿੰਗ ਕਰੀਅਰ ਮਾਰਗ ਉਹਨਾਂ ਬੱਚਿਆਂ ਲਈ ਸ਼ਾਨਦਾਰ ਹੈ ਜੋ ਉਤਸੁਕ, ਤਰਕਸ਼ੀਲ, ਅਤੇ ਸਮੱਸਿਆ-ਹੱਲ ਕਰਨ ਦਾ ਅਨੰਦ ਲੈਂਦੇ ਹਨ। ਉਹਨਾਂ ਨੂੰ LEGOs ਵਰਗੇ ਬਿਲਡਿੰਗ ਬਲੌਕਸ, ਸਧਾਰਨ ਕੋਡਿੰਗ ਗੇਮਾਂ, ਅਤੇ ਵਿਗਿਆਨ ਅਜਾਇਬ ਘਰਾਂ ਦਾ ਦੌਰਾ ਕਰਕੇ ਉਤਸ਼ਾਹਿਤ ਕਰੋ। ਇਹ ਖੇਤਰ ਉੱਚ ਨੌਕਰੀ ਦੀ ਸਥਿਰਤਾ ਅਤੇ ਭਵਿਖ ਨੂੰ ਬਣਾਉਣ ਦਾ ਮੌਕਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।`,
        roadmap: [
            { title: 'Foundation', punjabiTitle: 'ਨੀਂਹ', description: 'Master Math & Science concepts in school.', punjabiDescription: 'ਸਕੂਲ ਵਿੱਚ ਗਣਿਤ ਅਤੇ ਵਿਗਿਆਨ ਦੀਆਂ ਧਾਰਨਾਵਾਂ ਵਿੱਚ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰੋ।', icon: BookOpenIcon },
            { title: 'Learn to Code', punjabiTitle: 'ਕੋਡ ਕਰਨਾ ਸਿੱਖੋ', description: 'Start with simple languages like Python.', punjabiDescription: 'ਪਾਈਥਨ ਵਰਗੀਆਂ ਸਧਾਰਨ ਭਾਸ਼ਾਵਾਂ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ।', icon: PencilIcon },
            { title: 'Build Projects', punjabiTitle: 'ਪ੍ਰੋਜੈਕਟ ਬਣਾਓ', description: 'Create a simple website or a small game.', punjabiDescription: 'ਇੱਕ ਸਧਾਰਨ ਵੈਬਸਾਈਟ ਜਾਂ ਇੱਕ ਛੋਟੀ ਗੇਮ ਬਣਾਓ।', icon: SparklesIcon },
        ],
        resources: [
            { id: 'res-eng-1', title: 'Code.org', type: 'link', url: 'https://code.org', description: 'Learn computer science. Anybody can learn.' },
        ],
        tasks: [
            { title: 'Solve a Logic Puzzle', punjabiTitle: 'ਇੱਕ ਤਰਕ ਬੁਝਾਰਤ ਨੂੰ ਹੱਲ ਕਰੋ', description: 'Complete a Sudoku or a logic grid puzzle.', punjabiDescription: 'ਇੱਕ ਸੁਡੋਕੁ ਜਾਂ ਇੱਕ ਤਰਕ ਗਰਿੱਡ ਬੁਝਾਰਤ ਨੂੰ ਪੂਰਾ ਕਰੋ।', skill: 'Problem-solving' },
        ],
    },
    {
        id: 'movie-director',
        name: 'Movie Director',
        punjabiName: 'ਫਿਲਮ ਨਿਰਦੇਸ਼ਕ',
        icon: FilmIcon,
        description: 'Bring stories to life by overseeing the creative and technical aspects of filmmaking, from script to screen.',
        punjabiDescription: 'ਸਕ੍ਰਿਪਟ ਤੋਂ ਲੈ ਕੇ ਸਕ੍ਰੀਨ ਤੱਕ, ਫਿਲਮ ਨਿਰਮਾਣ ਦੇ ਰਚਨਾਤਮਕ ਅਤੇ ਤਕਨੀਕੀ ਪਹਿਲੂਆਂ ਦੀ ਨਿਗਰਾਨੀ ਕਰਕੇ ਕਹਾਣੀਆਂ ਨੂੰ ਜੀਵਨ ਵਿੱਚ ਲਿਆਓ।',
        parentInfo: `This career is perfect for imaginative children who love storytelling and visual arts. You can nurture their passion by watching diverse films together, discussing characters and plots, and providing a simple camera or smartphone for them to practice with. It's a competitive but highly rewarding field for creative minds.`,
        punjabiParentInfo: `ਇਹ ਕਰੀਅਰ ਕਲਪਨਾਸ਼ੀਲ ਬੱਚਿਆਂ ਲਈ ਸੰਪੂਰਨ ਹੈ ਜੋ ਕਹਾਣੀ ਸੁਣਾਉਣ ਅਤੇ ਵਿਜ਼ੂਅਲ ਆਰਟਸ ਨੂੰ ਪਸੰਦ ਕਰਦੇ ਹਨ। ਤੁਸੀਂ ਇਕੱਠੇ ਵੱਖ-ਵੱਖ ਫਿਲਮਾਂ ਦੇਖ ਕੇ, ਪਾਤਰਾਂ ਅਤੇ ਪਲਾਟਾਂ 'ਤੇ ਚਰਚਾ ਕਰਕੇ, ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਅਭਿਆਸ ਕਰਨ ਲਈ ਇੱਕ ਸਧਾਰਨ ਕੈਮਰਾ ਜਾਂ ਸਮਾਰਟਫੋਨ ਪ੍ਰਦਾਨ ਕਰਕੇ ਉਹਨਾਂ ਦੇ ਜਨੂੰਨ ਦਾ ਪਾਲਣ ਪੋਸ਼ਣ ਕਰ ਸਕਦੇ ਹੋ। ਇਹ ਰਚਨਾਤਮਕ ਦਿਮਾਗਾਂ ਲਈ ਇੱਕ ਪ੍ਰਤੀਯੋਗੀ ਪਰ ਬਹੁਤ ਹੀ ਲਾਭਦਾਇਕ ਖੇਤਰ ਹੈ।`,
        roadmap: [
            { title: 'Learn Storytelling', punjabiTitle: 'ਕਹਾਣੀ ਸੁਣਾਉਣਾ ਸਿੱਖੋ', description: 'Read books and watch movies to understand story structure.', punjabiDescription: 'ਕਹਾਣੀ ਦੀ ਬਣਤਰ ਨੂੰ ਸਮਝਣ ਲਈ ਕਿਤਾਬਾਂ ਪੜ੍ਹੋ ਅਤੇ ਫਿਲਮਾਂ ਦੇਖੋ।', icon: BookOpenIcon },
            { title: 'Master the Camera', punjabiTitle: 'ਕੈਮਰੇ ਵਿੱਚ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰੋ', description: 'Learn basic camera shots, angles, and lighting.', punjabiDescription: 'ਮੁਢਲੇ ਕੈਮਰਾ ਸ਼ਾਟ, ਕੋਣ, ਅਤੇ ਰੋਸ਼ਨੀ ਸਿੱਖੋ।', icon: CameraIcon },
            { title: 'Direct a Short Film', punjabiTitle: 'ਇੱਕ ਛੋਟੀ ਫਿਲਮ ਦਾ ਨਿਰਦੇਸ਼ਨ ਕਰੋ', description: 'Collaborate with friends to create your own short movie.', punjabiDescription: 'ਆਪਣੀ ਖੁਦ ਦੀ ਛੋਟੀ ਫਿਲਮ ਬਣਾਉਣ ਲਈ ਦੋਸਤਾਂ ਨਾਲ ਸਹਿਯੋਗ ਕਰੋ।', icon: SparklesIcon },
        ],
        resources: [
            { id: 'res-dir-1', title: 'YouTube Creator Academy', type: 'link', url: 'https://creatoracademy.youtube.com/', description: 'Learn skills to create great videos.' },
        ],
        tasks: [
            { title: 'Analyze a Movie Scene', punjabiTitle: 'ਇੱਕ ਫਿਲਮ ਦੇ ਦ੍ਰਿਸ਼ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ', description: 'Watch a scene from your favorite movie without sound and describe the story.', punjabiDescription: 'ਆਪਣੀ ਮਨਪਸੰਦ ਫਿਲਮ ਦਾ ਇੱਕ ਦ੍ਰਿਸ਼ ਬਿਨਾਂ ਆਵਾਜ਼ ਦੇ ਦੇਖੋ ਅਤੇ ਕਹਾਣੀ ਦਾ ਵਰਣਨ ਕਰੋ।', skill: 'Visual Storytelling' },
            { title: 'Shoot a Short Film', punjabiTitle: 'ਇੱਕ ਛੋਟੀ ਫਿਲਮ ਸ਼ੂਟ ਕਰੋ', description: 'Shoot a short film on friendship with the help of friends.', punjabiDescription: "ਦੋਸਤਾਂ ਦੀ ਮਦਦ ਨਾਲ ਦੋਸਤੀ 'ਤੇ ਇੱਕ ਛੋਟੀ ਫਿਲਮ ਸ਼ੂਟ ਕਰੋ।", skill: 'Collaboration' },
        ],
    },
    {
        id: 'medical',
        name: 'Doctor / Healthcare',
        punjabiName: 'ਡਾਕਟਰ / ਸਿਹਤ ਸੰਭਾਲ',
        icon: HeartIcon,
        description: 'Help people stay healthy and treat them when they are sick. Doctors, nurses, and other professionals work to save lives.',
        punjabiDescription: 'ਲੋਕਾਂ ਨੂੰ ਸਿਹਤਮੰਦ ਰਹਿਣ ਵਿੱਚ ਮਦਦ ਕਰੋ ਅਤੇ ਬਿਮਾਰ ਹੋਣ \'ਤੇ ਉਹਨਾਂ ਦਾ ਇਲਾਜ ਕਰੋ। ਡਾਕਟਰ, ਨਰਸਾਂ ਅਤੇ ਹੋਰ ਪੇਸ਼ੇਵਰ ਜਾਨਾਂ ਬਚਾਉਣ ਲਈ ਕੰਮ ਕਰਦੇ ਹਨ।',
        parentInfo: `A career in healthcare is ideal for compassionate children who are good in science and want to help others. Encourage their interest with science kits, books about the human body, and volunteering opportunities. It's a challenging but deeply fulfilling path with a direct impact on people's lives.`,
        punjabiParentInfo: `ਸਿਹਤ ਸੰਭਾਲ ਵਿੱਚ ਇੱਕ ਕਰੀਅਰ ਉਹਨਾਂ ਦਿਆਲੂ ਬੱਚਿਆਂ ਲਈ ਆਦਰਸ਼ ਹੈ ਜੋ ਵਿਗਿਆਨ ਵਿੱਚ ਚੰਗੇ ਹਨ ਅਤੇ ਦੂਜਿਆਂ ਦੀ ਮਦਦ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹਨ। ਵਿਗਿਆਨ ਕਿੱਟਾਂ, ਮਨੁੱਖੀ ਸਰੀਰ ਬਾਰੇ ਕਿਤਾਬਾਂ, ਅਤੇ ਸਵੈ-ਸੇਵੀ ਮੌਕਿਆਂ ਨਾਲ ਉਹਨਾਂ ਦੀ ਰੁਚੀ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰੋ। ਇਹ ਲੋਕਾਂ ਦੇ ਜੀਵਨ 'ਤੇ ਸਿੱਧੇ ਪ੍ਰਭਾਵ ਨਾਲ ਇੱਕ ਚੁਣੌਤੀਪੂਰਨ ਪਰ ਡੂੰਘਾਈ ਨਾਲ ਪੂਰਾ ਕਰਨ ਵਾਲਾ ਮਾਰਗ ਹੈ।`,
        roadmap: [
            { title: 'Excel in Biology', punjabiTitle: 'ਜੀਵ ਵਿਗਿਆਨ ਵਿੱਚ ਮੁਹਾਰਤ', description: 'Focus on Biology and Chemistry in your studies.', punjabiDescription: 'ਆਪਣੀ ਪੜ੍ਹਾਈ ਵਿੱਚ ਜੀਵ ਵਿਗਿਆਨ ਅਤੇ ਰਸਾਇਣ ਵਿਗਿਆਨ \'ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰੋ।', icon: BookOpenIcon },
            { title: 'Understand the Body', punjabiTitle: 'ਸਰੀਰ ਨੂੰ ਸਮਝੋ', description: 'Learn about human anatomy and physiology.', punjabiDescription: 'ਮਨੁੱਖੀ ਸਰੀਰ ਵਿਗਿਆਨ ਅਤੇ ਸਰੀਰ ਵਿਗਿਆਨ ਬਾਰੇ ਜਾਣੋ।', icon: UsersIcon },
            { title: 'Gain Experience', punjabiTitle: 'ਤਜਰਬਾ ਹਾਸਲ ਕਰੋ', description: 'Volunteer at a local clinic or hospital.', punjabiDescription: 'ਕਿਸੇ ਸਥਾਨਕ ਕਲੀਨਿਕ ਜਾਂ ਹਸਪਤਾਲ ਵਿੱਚ ਸਵੈ-ਸੇਵੀ ਕਰੋ।', icon: SparklesIcon },
        ],
        resources: [
            { id: 'res-med-1', title: 'National Geographic Kids: Human Body', type: 'link', url: 'https://kids.nationalgeographic.com/human-body', description: 'Explore the amazing human body.' },
        ],
        tasks: [
            { title: 'First Aid Basics', punjabiTitle: 'ਮੁੱਢਲੀ ਸਹਾਇਤਾ ਦੀਆਂ ਮੂਲ ਗੱਲਾਂ', description: 'Learn how to handle a small cut or a burn.', punjabiDescription: 'ਇੱਕ ਛੋਟੇ ਕੱਟ ਜਾਂ ਜਲਣ ਨੂੰ ਸੰਭਾਲਣਾ ਸਿੱਖੋ।', skill: 'Empathy & Care' },
        ],
    }
];

export const MOTIVATIONAL_STORIES_DATA: MotivationalStory[] = [
    {
        id: 'kalam',
        name: 'Dr. A.P.J. Abdul Kalam',
        punjabiName: 'ਡਾ. ਏ.ਪੀ.ਜੇ. ਅਬਦੁਲ ਕਲਾਮ',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/800px-A._P._J._Abdul_Kalam.jpg',
        story: 'From a humble background in Rameswaram, he became India\'s "Missile Man" and later, its most beloved President. His life teaches us that with dedication and hard work, no dream is too big.',
        punjabiStory: `ਰਾਮੇਸ਼ਵਰਮ ਵਿੱਚ ਇੱਕ ਨਿਮਰ ਪਿਛੋਕੜ ਤੋਂ, ਉਹ ਭਾਰਤ ਦੇ "ਮਿਜ਼ਾਈਲ ਮੈਨ" ਬਣੇ ਅਤੇ ਬਾਅਦ ਵਿੱਚ, ਇਸਦੇ ਸਭ ਤੋਂ ਪਿਆਰੇ ਰਾਸ਼ਟਰਪਤੀ। ਉਹਨਾਂ ਦਾ ਜੀਵਨ ਸਾਨੂੰ ਸਿਖਾਉਂਦਾ ਹੈ ਕਿ ਸਮਰਪਣ ਅਤੇ ਸਖ਼ਤ ਮਿਹਨਤ ਨਾਲ, ਕੋਈ ਵੀ ਸੁਪਨਾ ਬਹੁਤ ਵੱਡਾ ਨਹੀਂ ਹੁੰਦਾ।`
    },
    {
        id: 'ramanujan',
        name: 'Srinivasa Ramanujan',
        punjabiName: 'ਸ਼੍ਰੀਨਿਵਾਸ ਰਾਮਾਨੁਜਨ',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Srinivasa_Ramanujan_-_OPC_-_1.jpg/800px-Srinivasa_Ramanujan_-_OPC_-_1.jpg',
        story: 'A self-taught mathematical genius who made extraordinary contributions to number theory. Despite having almost no formal training, his passion and intuition led him to discoveries that still inspire mathematicians today.',
        punjabiStory: 'ਇੱਕ ਸਵੈ-ਸਿਖਿਅਤ ਗਣਿਤਕ ਪ੍ਰਤਿਭਾ ਜਿਸਨੇ ਸੰਖਿਆ ਸਿਧਾਂਤ ਵਿੱਚ ਅਸਾਧਾਰਨ ਯੋਗਦਾਨ ਪਾਇਆ। ਲਗਭਗ ਕੋਈ ਰਸਮੀ ਸਿਖਲਾਈ ਨਾ ਹੋਣ ਦੇ ਬਾਵਜੂਦ, ਉਸਦੇ ਜਨੂੰਨ ਅਤੇ ਸਹਿਜ ਗਿਆਨ ਨੇ ਉਸਨੂੰ ਖੋਜਾਂ ਵੱਲ ਪ੍ਰੇਰਿਤ ਕੀਤਾ ਜੋ ਅੱਜ ਵੀ ਗਣਿਤ-ਵਿਗਿਆਨੀਆਂ ਨੂੰ ਪ੍ਰੇਰਿਤ ਕਰਦੀਆਂ ਹਨ।'
    }
];