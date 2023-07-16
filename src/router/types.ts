import type { FC } from 'react'

export type TRoutePageType = {
  path: string
  element: FC
  title: string
  isPrivate?: boolean
}

export enum ERoutePaths {
  Home = '/',
  Login = '/login',
  Signup = '/signup',
  Basket = '/basket',
  Error = '*',
  Lesson = '/course/:id/lessons',
  Graduate = '/graduate',
  Settings = '/settings',
  MyAccount = '/my-account',
  Components = '/components',
  ProgramIntro = '/courses/:courseId',

  //faculty
  Faculty = '/faculty/:degree',
  FacultyBachelor = '/faculty/bachelor',
  FacultyFreeLesson = '/faculty/free',
  FacultyGraduate = '/faculty/graduate',
  FacultyMaster = '/faculty/master',
  FacultyProfessor = '/faculty/professor',

  //comingSoon
  ComingSoon = '/coming-soon/:title',
  ComingSoonProfessor = '/coming-soon/professor',
  ComingSoonNews = '/coming-soon/news',
  ComingSoonMaster = '/coming-soon/master',
  ComingSoonGraduate = '/coming-soon/graduate',
  ComingSoonBlog = '/coming-soon/blog',
}
