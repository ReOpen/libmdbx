/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "libmdbx", "index.html", [
    [ "Overall", "index.html", [
      [ "Brief", "index.html#brief", null ],
      [ "Table of Contents", "index.html#toc", null ],
      [ "MithrilDB", "index.html#MithrilDB", null ],
      [ "History", "index.html#autotoc_md1", [
        [ "Acknowledgments", "index.html#autotoc_md2", null ]
      ] ],
      [ "Contributors", "index.html#autotoc_md3", null ],
      [ "License", "index.html#autotoc_md4", null ]
    ] ],
    [ "Introduction", "intro.html", [
      [ "Characteristics", "intro.html#characteristics", [
        [ "Preface", "intro.html#preface", null ],
        [ "Features", "intro.html#autotoc_md5", null ],
        [ "Limitations", "intro.html#autotoc_md6", null ],
        [ "Gotchas", "intro.html#autotoc_md7", null ],
        [ "Comparison with other databases", "intro.html#autotoc_md8", null ]
      ] ],
      [ "Improvements beyond LMDB", "intro.html#autotoc_md9", [
        [ "Added Features", "intro.html#autotoc_md10", null ],
        [ "Other fixes and specifics", "intro.html#autotoc_md11", null ]
      ] ],
      [ "Restrictions & Caveats", "intro.html#restrictions", [
        [ "Troubleshooting the LCK-file", "intro.html#autotoc_md12", null ],
        [ "Remote filesystems", "intro.html#autotoc_md13", null ],
        [ "Child processes", "intro.html#autotoc_md14", null ],
        [ "Read-only mode", "intro.html#autotoc_md15", null ],
        [ "One thread - One transaction", "intro.html#autotoc_md16", null ],
        [ "Do not open twice", "intro.html#autotoc_md17", null ],
        [ "Long-lived read transactions", "intro.html#long-lived-read", null ],
        [ "Space reservation", "intro.html#autotoc_md18", null ]
      ] ],
      [ "Performance comparison", "intro.html#performance", [
        [ "Integral performance", "intro.html#autotoc_md19", null ],
        [ "Read Scalability", "intro.html#autotoc_md21", null ],
        [ "Sync-write mode", "intro.html#autotoc_md23", null ],
        [ "Lazy-write mode", "intro.html#autotoc_md25", null ],
        [ "Async-write mode", "intro.html#autotoc_md27", null ],
        [ "Cost comparison", "intro.html#autotoc_md29", null ]
      ] ]
    ] ],
    [ "Usage", "usage.html", [
      [ "Building & Embedding", "usage.html#getting", [
        [ "Source code embedding", "usage.html#autotoc_md30", null ],
        [ "Building", "usage.html#autotoc_md31", [
          [ "Linux and other platforms with GNU Make", "usage.html#autotoc_md33", null ],
          [ "FreeBSD and related platforms", "usage.html#autotoc_md34", null ],
          [ "Windows", "usage.html#autotoc_md35", null ],
          [ "Windows Subsystem for Linux", "usage.html#autotoc_md36", null ],
          [ "MacOS", "usage.html#autotoc_md37", null ],
          [ "Android", "usage.html#autotoc_md38", null ],
          [ "iOS", "usage.html#autotoc_md39", null ]
        ] ]
      ] ],
      [ "Getting started", "usage.html#starting", [
        [ "Cursors", "usage.html#Cursors", null ],
        [ "Summarizing the opening", "usage.html#autotoc_md40", null ],
        [ "Threads and processes", "usage.html#autotoc_md41", null ],
        [ "Transactions, rollbacks etc", "usage.html#autotoc_md42", null ],
        [ "Duplicate keys aka Multi-values", "usage.html#autotoc_md43", null ],
        [ "Some optimization", "usage.html#autotoc_md44", null ],
        [ "Cleaning up", "usage.html#autotoc_md45", null ],
        [ "Now read up on the full API!", "usage.html#autotoc_md46", null ]
      ] ],
      [ "Bindings", "usage.html#bindings", null ]
    ] ],
    [ "ChangeLog", "md__change_log.html", [
      [ "v0.9.4 (in development) scheduled at 2021-03-18", "md__change_log.html#autotoc_md53", null ],
      [ "v0.9.3 at 2021-02-02", "md__change_log.html#autotoc_md54", null ],
      [ "v0.9.2 at 2020-11-27", "md__change_log.html#autotoc_md55", null ],
      [ "v0.9.1 2020-09-30", "md__change_log.html#autotoc_md56", null ],
      [ "v0.9.0 2020-07-31 (not a release, but API changes)", "md__change_log.html#autotoc_md57", null ],
      [ "v0.8.2 2020-07-06", "md__change_log.html#autotoc_md58", null ],
      [ "v0.8.1 2020-06-12", "md__change_log.html#autotoc_md59", null ],
      [ "v0.8.0 2020-06-05", "md__change_log.html#autotoc_md60", null ],
      [ "v0.7.0 2020-03-18", "md__change_log.html#autotoc_md61", null ],
      [ "v0.6.0 2020-01-21", "md__change_log.html#autotoc_md62", null ],
      [ "v0.5.0 2019-12-31", "md__change_log.html#autotoc_md63", null ],
      [ "v0.4.0 2019-12-02", "md__change_log.html#autotoc_md64", null ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"classmdbx_1_1env.html#af1901bf285a87e565f56ee7d6e06f486",
"group__api__macros.html#ga981241dcda96409c7c5cb142bfce46cc",
"group__c__api.html#gga671855605968c3b1f89a72e2d7b71eb3ac98546b254e33d482e15ae1208c34174",
"group__c__err.html#ggab5ba1469eef28a2e09ed243b608b11cea3b4e9019457bad6d2b62d35d534143f0",
"group__c__statinfo.html#gab0f04c502ac868a98c36480dded0a3a2",
"mdbx_8h_09_09.html#ac353595aa9d5601f1a5888b26761db04",
"structmdbx_1_1env_1_1reader__info.html#aefef77baeaa3cc83a4988b76a885feb1"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';