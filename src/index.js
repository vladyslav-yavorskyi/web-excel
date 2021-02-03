import { DashboardPage } from './core/pages/DashboardPage';
import { ExcelPage } from './core/pages/ExcelPage';
import { Router } from './core/routes/Router';
import './scss/index.scss';

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage,
});
