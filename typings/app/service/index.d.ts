// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportCommon from '../../../app/service/common';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    common: ExportCommon;
  }
}
