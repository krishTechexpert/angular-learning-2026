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
import { SiblingDemo } from './components/sibling-demo/sibling-demo';
import { Sidebar } from './components/sidebar/sidebar';
import { ThemeBar } from './components/theme-bar/theme-bar';
import { SwitchCaseDemo } from './components/switch-case-demo/switch-case-demo';
import { ReservedWordDemo } from './components/reserved-word-demo/reserved-word-demo';
import { TrackByDemo } from './components/track-by-demo/track-by-demo';
import { IfRoleDirective } from './directives/if-role.directive';
import { SampleDirective } from './directives/sample-directive';
import { ShowHidePassword } from './directives/show-hide-password';
import { ShowHidePasswordImproved } from './directives/show-hide-password-improved';
import { PipeDemo } from './components/pipe-demo/pipe-demo';

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
    SiblingDemo,
    Sidebar,
    ThemeBar,
    SwitchCaseDemo,
    ReservedWordDemo,
    TrackByDemo,
    IfRoleDirective,
    SampleDirective,
    ShowHidePassword,
    ShowHidePasswordImproved,
    PipeDemo,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
