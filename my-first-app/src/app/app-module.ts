import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header';
import { Footer } from './components/footer/footer';
import { Parent } from './components/parent/parent';
import { Child } from './components/child/child';
import { GrandChild } from './components/grand-child/grand-child';
import { DataBindingDemo } from './components/data-binding-demo/data-binding-demo';
import { CommunicationBwtComponent } from './components/communication-bwt-component/communication-bwt-component';
import { ParentA } from './components/parent-a/parent-a';
import { ChildB } from './components/child-b/child-b';
import { ForIfDemo } from './components/for-if-demo/for-if-demo';
import { SwitchDemo } from './components/switch-demo/switch-demo';
import { SiblingDemo } from './components/sibling-demo/sibling-demo';
import { Sidebar } from './components/sidebar/sidebar';
import { ThemeBar } from './components/theme-bar/theme-bar';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Parent,
    Child,
    GrandChild,
    DataBindingDemo,
    CommunicationBwtComponent,
    ParentA,
    ChildB,
    ForIfDemo,
    SwitchDemo,
    SiblingDemo,
    Sidebar,
    ThemeBar,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
