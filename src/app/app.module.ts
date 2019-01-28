import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { QuestionComponent } from './question/question.component';
import { RouterModule, Routes } from '@angular/router';
import { TestService } from './test/test.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExamComponent } from './exam/exam.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Test1Component } from './test1/test1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    QuestionComponent,
    LoginComponent,
    PageNotFoundComponent,
    ExamComponent,
    DashboardComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
