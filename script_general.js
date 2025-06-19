(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"watermark":false,"defaultMenu":[],"start":"this.init()","scrollBarColor":"#000000","id":"rootPlayer","layout":"absolute","data":{"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1,"stopBackgroundAudio":false,"volume":1},"name":"Player167495","displayTooltipInTouchScreens":false,"history":{},"defaultLocale":"es","forceDefaultLocale":true,"locales":{"es":"locale/es.txt"}},"class":"Player","backgroundColor":["#FFFFFF"],"gap":10,"propagateClick":false,"hash": "734d3ba5fa53b2c149c9bddbbda5418963c5aa2afcd16d09b8e7f0981e282cfb", "definitions": [{"items":[{"camera":"this.panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B_camera","media":"this.panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"hfovMax":130,"vfov":180,"hfov":360,"class":"Panorama","thumbnailUrl":"media/panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B_t.jpg","data":{"label":"fondo_pano2"},"frames":[{"thumbnailUrl":"media/panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":27648,"url":"media/panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B_0/{face}/0/{row}_{column}.jpg","rowCount":9,"tags":"ondemand","height":4608,"colCount":54,"class":"TiledImageResourceLevel"},{"width":15360,"url":"media/panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B_0/{face}/1/{row}_{column}.jpg","rowCount":5,"tags":"ondemand","height":2560,"colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"url":"media/panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B_0/{face}/2/{row}_{column}.jpg","rowCount":3,"tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B_0/{face}/3/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B_0/{face}/4/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"}]}}],"id":"panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B","label":trans('panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B.label')},{"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","zoomEnabled":false,"arrowKeysAction":"none","aaEnabled":true,"keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true},{"playbackBarHeadBorderColor":"#000000","toolTipPaddingTop":4,"subtitlesFontFamily":"Arial","playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBorderColor":"#000000","height":"100%","displayTooltipInTouchScreens":false,"subtitlesGap":0,"subtitlesEnabled":false,"subtitlesBackgroundColor":"#000000","subtitlesTextShadowOpacity":1,"data":{"name":"Main Viewer"},"translationTransitionEnabled":false,"width":"100%","subtitlesFontColor":"#FFFFFF","minHeight":50,"minWidth":100,"doubleClickAction":"none","interactionEnabled":false,"playbackBarBorderRadius":0,"toolTipPaddingRight":6,"vrPointerColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","subtitlesBottom":50,"playbackBarHeadHeight":15,"playbackBarLeft":0,"progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowColor":"#333138","playbackBarHeadShadowColor":"#000000","progressRight":"33%","toolTipBorderColor":"#767676","subtitlesTop":0,"progressOpacity":0.7,"toolTipTextShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","toolTipFontSize":"1.11vmin","toolTipFontColor":"#606060","playbackBarHeadShadow":true,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"vrPointerSelectionColor":"#FF6600","id":"MainViewer","subtitlesBorderColor":"#FFFFFF","class":"ViewerArea","subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"surfaceReticleColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"toolTipPaddingBottom":4,"propagateClick":false,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderSize":0,"progressBottom":10,"progressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarHeight":10,"progressHeight":2,"playbackBarBackgroundColor":["#FFFFFF"],"surfaceReticleSelectionColor":"#FFFFFF","progressBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"progressBarBorderSize":0,"vrPointerSelectionTime":2000,"subtitlesFontSize":"3vmin","progressBarBorderRadius":2,"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundOpacity":1,"playbackBarBackgroundColorDirection":"vertical","playbackBarBottom":5,"toolTipFontFamily":"Arial","playbackBarBorderSize":0,"progressBorderRadius":2,"toolTipPaddingLeft":6,"playbackBarHeadBorderRadius":0,"progressLeft":"33%"},{"id":"panorama_BE19D89B_8597_9B26_41B2_1C8B67671A0B_camera","initialPosition":{"hfov":120,"pitch":-14.09,"class":"PanoramaCameraPosition","yaw":17.2},"class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_BDCCD2D2_8597_EF20_41BA_D9DBD6636396"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323000,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","mandatory":true,"id":"sequence_BDCCD2D2_8597_EF20_41BA_D9DBD6636396"}],"mouseWheelEnabled":false,"minHeight":0,"backgroundColorRatios":[0],"minWidth":0,"scripts":{"getMediaWidth":TDV.Tour.Script.getMediaWidth,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setLocale":TDV.Tour.Script.setLocale,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"clone":TDV.Tour.Script.clone,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"openLink":TDV.Tour.Script.openLink,"resumePlayers":TDV.Tour.Script.resumePlayers,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"shareSocial":TDV.Tour.Script.shareSocial,"toggleVR":TDV.Tour.Script.toggleVR,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"createTween":TDV.Tour.Script.createTween,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"playAudioList":TDV.Tour.Script.playAudioList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPixels":TDV.Tour.Script.getPixels,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMainViewer":TDV.Tour.Script.getMainViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowScore":TDV.Tour.Script.quizShowScore,"init":TDV.Tour.Script.init,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"isPanorama":TDV.Tour.Script.isPanorama,"quizStart":TDV.Tour.Script.quizStart,"initAnalytics":TDV.Tour.Script.initAnalytics,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"registerKey":TDV.Tour.Script.registerKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeJS":TDV.Tour.Script.executeJS,"historyGoForward":TDV.Tour.Script.historyGoForward,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"downloadFile":TDV.Tour.Script.downloadFile,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"disableVR":TDV.Tour.Script.disableVR,"setValue":TDV.Tour.Script.setValue,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"startMeasurement":TDV.Tour.Script.startMeasurement,"getComponentByName":TDV.Tour.Script.getComponentByName,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"setMapLocation":TDV.Tour.Script.setMapLocation,"mixObject":TDV.Tour.Script.mixObject,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"cloneBindings":TDV.Tour.Script.cloneBindings,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"getKey":TDV.Tour.Script.getKey,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"enableVR":TDV.Tour.Script.enableVR,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"translate":TDV.Tour.Script.translate,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showWindow":TDV.Tour.Script.showWindow,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateVideoCues":TDV.Tour.Script.updateVideoCues},"scrollBarMargin":2,"width":"100%","height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.9, Thu Jun 19 2025