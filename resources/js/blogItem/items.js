let items = [
  {
    productName: "item정렬 방식 flex vs grid",
    category: 'layout',
    url: "basic/flex_grid_item_layout_compare.html",
  },
  {
    productName: "CSS로 목록 스타일을 개선하는 2가지 방법",
    category: "basic",
    url: "basic/2ways_improve_list_styling.html",
  },
  {
    productName: "div 요소의 내용 인쇄",
    category: "basic",
    url: "basic/print_contents_div_element.html",
  },
  {
    productName: "grid를 이용한 덜 절대적인 위치 잡기",
    category: 'layout',
    url: "basic/grid/absolute_positioning_modern.html",
  },
  {
    productName: "css focus-visible(:focus 대신 사용)",
    category: 'mouse-effect',
    url: "basic/css_focus-visible(instead-focus).html",
  },
  {
    productName: "css all 속성에 대해서",
    category: "basic",
    url: "basic/css_all.html",
  },
  {
    productName: "반응형 전체 화면 배경",
    category: 'background-border',
    url: "basic/responsive_full-screen_background.html",
  },
  {
    productName: "논리적 속성을 사용하여 더 나은 CSS 작성",
    category: "basic",
    url: "basic/write_better_css_logical_properties.html",
  },
  {
    productName: "투명한 PNG 이미지 그림자 적용",
    category: 'image',
    category2: 'background-border',
    url: "basic/shadows_transparent_PNG.html",
  },
  {
    productName: "프로젝트에서 사용할 수 있는 flexbox 디자인 패턴",
    category: 'layout',
    url: "basic/flex/flexbox_design_patterns_projects.html",
  },
  {
    productName: "css auto-margin 정렬",
    category: 'layout',
    category2: 'layout',
    url: "basic/auto_margin.html",
  },
  {
    productName: "그리드로 쉽게 콘텐츠 겹침",
    category: 'layout',
    url: "basic/grid/easily_overlap_content.html",
  },
  {
    productName: "배경 비디오를 만드는 방법",
    category: 'background-border',
    url: "basic/how_to_create_background_video.html",
  },
  {
    productName: "background-blend-mode에 대해서",
    category: 'background-border',
    url: "basic/css_background_blend_mode.html",
  },
  {
    productName: "css calc() 에 대해서",
    category: "basic",
    url: "basic/css_calc().html",
  },
  {
    productName: "css object-fit을 사용하여 이미지를 제어하는 방법",
    category: 'image',
    url: "basic/css_object-fit.html",
  },
  {
    productName: "미디어 쿼리가 없는 반응형 CSS 그리드!",
    category: 'flex-grid',
    category: 'layout',
    url: "basic/grid/responsive_no_media_queries.html",
  },
  {
    productName: "배경반복 값 space에 대해서",
    category: 'background-border',
    url: "basic/background_repeat_space.html",
    linkType: 'outlink',
  },
  {
    productName: "다른 색상의 CSS 이중 테두리",
    category: 'background-border',
    url: "basic/double_border_width_diffrent_colors.html",
  },
  {
    productName: "영리한 고정 바닥글 기법",
    category: 'layout',
    url: "basic/sticky_footer_technique.html",
  },
  {
    productName: "그림자 그라디언트",
    category: 'background-border',
    url: "basic/grdient_drop_shadow.html",
  },
  {
    productName: "줄무늬 배경",
    category: 'background-border',
    url: "basic/stiped_background_pattern.html",
  },
  {
    productName: "도트 배경",
    category: 'background-border',
    url: "basic/dot_background_pattern.html",
  },
  {
    productName: "css touch-action 한눈에보기",
    category: 'mouse-effect',
    url: "basic/touch-action.html",
  },
  {
    productName: "css 가상요소 선택자 - marker",
    category: 'basic',
    url: "basic/css가상요소_marker.html",
  },
  {
    productName: "mix-blend-mode 사용 예시 (isolation)",
    category: 'background-border',
    url: "basic/css_mix-blend-mode_사용.html",
  },
  {
    productName: "inset을 이용한 full 레이아웃",
    category: 'layout',
    url: "basic/css_inset_layout.html",
  },
  {
    productName: "input에 관하여",
    category: 'form',
    category2: 'basic',
    url: "basic/input.html",
  },
  {
    productName: "유동적인 타이포그래피 css함수 - clamp()",
    category: 'text-effect',
    url: "basic/유동적인_타이포그래피_clamp().html",
  },
  {
    productName: "반전 그림자 표현 reflected text",
    category: 'text-effect',
    url: "basic/reflected_text.html",
  },
  {
    productName: "skeleton screen",
    category: 'icon-loading',
    url: "basic/skeleton_screen.html",
  },
  {
    productName: "skeleton screen 여러개",
    category: 'icon-loading',
    url: "basic/skeleton_screen2.html",
  },
  {
    productName: "flex margin-top 이용한 footer고정",
    category: 'layout',
    url: "basic/footer_flex(margin).html",
  },
  {
    productName: "와인샵 컨셉_반응형 슬라이더(GREENSOCK)",
    category: 'slide',
    url: "slide/wine_shop_concept_responsive_slider.html",
  },
  {
    productName: "응답성이 뛰어난 최소 포트폴리오 웹 사이트",
    category: 'slide',
    url: "slide/minimal_portfolio/index.html",
  },
  {
    productName: "고급스러운 반응형 슬라이드 slick.js",
    category: 'slide',
    url: "slide/responsive_slider_slickjs/index.html",
  },
  {
    productName: "gsap를 이용한 세로로 부드럽게 슬라이드",
    category: 'slide',
    url: "slide/vertical_content_slider.html",
  },
  {
    productName: "수직 카드 슬라이딩 애니메이션(only css)",
    category: 'slide',
    url: "slide/vertical_card_sliding_animation.html",
  },
  {
    productName: "계속 반복되는 한줄이미지 배너(only css)",
    category: 'slide',
    url: "slide/infinite_autoplay_carousel(only-css).html",
  },
  {
    productName: "멀티플 슬라이드 순수 자바스크립트",
    category: 'slide',
    url: "slide/multiple_slideshow_loop.html",
  },
  {
    productName: "이미지 반사 효과 3D 슬라이더",
    category: 'slide',
    url: "slide/3D_image_slider_reflection_Materialize.html",
    linkType: 'outlink',
  },
  {
    productName: "Glide.js를 사용한 놀라운 효과의 이미지 슬라이드",
    category: 'slide',
    url: "slide/glide/index.html",
  },
  {
    productName: "Javascript를 사용 Mousemove에서 이미지 회전 제어",
    category: 'slide',
    url: "slide/control_image_rotation_mousemove.html",
  },
  {
    productName: "circular rotating reflection",
    category: 'slide',
    url: "slide/css_circular_rotating_slider_reflection.html",
  },
  {
    productName: "swiper 슬라이드 IE 호환성 문제 해결",
    category: 'slide',
    url: "slide/swiper-4.5.1/demos/010-default.html",
  },
  {
    productName: "오직css만을 이용한 슬라이드(auto)",
    category: 'slide',
    url: "slide/css-only_carousel_slider.html",
  },
  {
    productName: "canvas + javascript를 이용한 부드럽게 그라디언트 움직임",
    category: 'background-border',
    category2: 'animation',
    url: "page-bg/background_gradient_embraced.html",
  },
  {
    productName: "배경 이미지의 불투명도를 낮추다",
    category: "background-border",
    category2: "image",
    url: "page-bg/lower_opacity_background_image.html",
  },
  {
    productName: "컨테이너 내부 전체 너비 배경",
    category: 'background-border',
    category2: 'layout',
    url: "page-bg/full-width_background_inside_container.html",
  },
  {
    productName: 'Javascript를 사용하여 전체 화면 모드 켜기 클릭',
    category: 'layout',
    url: 'page-bg/toggle_fullscreen_mode_onclick.html',
  },
  {
    productName: '배경 애니메이션 작은 조명 GSAP',
    category: 'background-border',
    category2: 'animation',
    url: 'page-bg/background_animation_small_light_GSAP.html',
  },
  {
    productName: '크리스마스용 배경 애니메이션 GSAP',
    category: 'background-border',
    category2: 'animation',
    url: 'page-bg/background_animation_christmas_GSAP.html',
  },
  {
    productName: 'GSAP + Barba.js 이용한 페이지 전환 animation',
    category: 'animation',
    url: 'page-bg/page_transition_barbajs_gsap/index.html',
  },
  {
    productName: 'Landing Page Animation GSAP',
    category: 'animation',
    url: 'page-bg/landing_page_animation/index.html',
  },
  {
    productName: 'GSAP를 사용한 사각 입자 애니메이션',
    category: 'background-border',
    category2: 'animation',
    url: 'page-bg/square_particles_animation.html',
  },
  {
    productName: '모바일에서 유닛을 표시하는 요령',
    category: 'layout',
    url: 'page-bg/trick_viewport_units_on_mobile.html',
  },
  {
    productName: '달밤 유성 캔버스 애니메이션',
    category: 'animation',
    url: 'page-bg/moon_night_meteor_canvas_animation.html',
  },
  {
    productName: '배경에 눈내리는(Canvas + Vanilla JS',
    category: 'animation',
    category2: 'background-border',
    url: 'page-bg/falling_snow_animations.html',
  },
  {
    productName: '대각선 줄무늬 지우기 애니메이션',
    category: 'animation',
    category2: 'background-border',
    url: 'page-bg/diagonal_stripes_wipe_animation.html',
  },
  {
    productName: 'CSS 속성이 1개뿐인 풀 다크 모드?!',
    category: 'layout',
    url: 'page-bg/full_dark_mode_only_css.html',
  },
  {
    productName: '3개 이미지가 겹쳐서 웨이브하는 background',
    category: 'animation',
    category2: 'background-border',
    url: 'page-bg/wavy_section_animation.html',
  },
  {
    productName: '화살표 모양의 border',
    category: 'background-border',
    url: 'page-bg/zig_zag_border.html',
  },
  {
    productName: 'clip-path 활용한 뾰족한 화살표 헤더 모양',
    category: 'background-border',
    category2: 'layout',
    url: 'page-bg/responsive_pointed_arrow_header_shape.html',
  },
  {
    productName: '스크롤시 숫자 그래프 애니메이션 (Vanilla Js)',
    category: 'chart-graph',
    category2: 'scroll-parallax',
    url: 'text-animate/scrollbar_number_animation_vanila.html',
  },
  {
    productName: '숫자 그래프 애니메이션 (Vanilla Js)',
    category: 'chart-graph',
    url: 'text-animate/number_animation_vanila.html',
  },
  {
    productName: '코너 텍스트 시차 효과(Vanilla Js)',
    category: 'mouse-effect',
    category2: 'text-effect',
    url: 'text-animate/corner_text_parallax.html',
  },
  {
    productName: 'CSS Only Intro 텍스트 애니메이션 효과(only css)',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/intro_text_animation_simple_text.html',
  },
  {
    productName: '100년 카운팅 모션(only css)',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/100years(only-css).html',
  },
  {
    productName: 'splitting.js 이용한 시간차 점핑 텍스트 animation',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/splitting_animated_verbs.html',
  },
  {
    productName: 'clip-path circle 안으로 텍스트 지나가는 모션',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/clip-path_circle_and_scrolling_text_animation.html',
  },
  {
    productName: '현재날짜 가져오기',
    category: 'text-effect',
    url: 'text-animate/get_current_date_js.html',
  },
  {
    productName: 'neonlight 텍스트 타이핑 테두리 호버 효과',
    category: 'animation',
    category2: 'mouse-effect',
    url: 'text-animate/text_typing_neon_light_border_animation.html',
  },
  {
    productName: 'text flying 애니메이션(gsap)',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/flying_text_animation_GSAP.html',
  },
  {
    productName: 'box형태로 텍스트 밑줄긋기 애니메이션(gsap)',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/Text_GSAP_animation.html',
  },
  {
    productName: 'box형태로 텍스트 밑줄긋기 애니메이션2(gsap)',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/swesome_text_effect_animation_gsap.html',
  },
  {
    productName: 'rainbow text animation',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/rainbow_text_animation.html',
  },
  {
    productName: '순차적 커졌다 작아지는 텍스트 animation (AnimeJS)',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/big_small_text_animation.html',
  },
  {
    productName: 'counting - up&down카운팅',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/count_up_Down_animation.html',
  },
  {
    productName: 'rolling - 세로로 부드럽게 회전',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/rotating_words.html',
  },
  {
    productName: '오늘 요일 찾기',
    category: 'text-effect',
    url: 'text-animate/find_day_week_javascript.html',
  },
  {
    productName: '지정한 날짜 카운트다운',
    category: 'text-effect',
    url: 'text-animate/countdown_using_javascript.html',
  },
  {
    productName: 'Gradient Text Stroke',
    category: 'text-effect',
    url: 'text-animate/gradient_text_stroke.html',
  },
  {
    productName: '그라디언트 배경 animation',
    category: 'background-border',
    category2: 'animation',
    url: 'text-animate/gradient_background_animation.html',
  },
  {
    productName: 'blur효과가 들어간 좁혀졌다 넓어졌다 animation',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/text_reveal_animation.html',
  },
  {
    productName: 'repeating-linear-gradient를 이용한 텍스트 패턴 배경',
    category: 'text-effect',
    url: 'text-animate/layered_text_hover.html',
  },
  {
    productName: '그라이언트를 이용한 텍스트 밑줄 한줄만',
    category: 'text-effect',
    url: 'text-animate/low_highlight_text.html',
  },
  {
    productName: 'counting - per를 이용한 weight, bar 카운팅',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/weight_count/html.html',
  },
  {
    productName: '3D - 시간 순서에 따라 입체적 노출(gsap)',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/3D_text_effect_animation_gsap.html',
  },
  {
    productName: 'counting - counterup.js 텍스트 카운팅',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/animated_counter_up_effect_redefined.html',
  },
  {
    productName: 'clitch text effect',
    category: 'text-effect',
    url: 'text-animate/clitch_effect.html',
  },
  {
    productName: 'coming soon timer effect1',
    category: 'text-effect',
    url: 'text-animate/coming_soon_js.html',
  },
  {
    productName: 'coming soon timer effect2',
    category: 'text-effect',
    url: 'text-animate/coming_soon_js2.html',
  },
  {
    productName: '3D - isometric text(js)',
    category: 'text-effect',
    url: 'text-animate/css3D_isometric_text_vanilla.html',
  },
  {
    productName: 'hatched shadow text effect',
    category: 'text-effect',
    url: 'text-animate/hatched_text_shadow.html',
  },
  {
    productName: 'intro 부드럽게 노출 enter클릭 사라짐',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/inter_text_animation.html',
  },
  {
    productName: '스무스한 느낌으로 늘어났다가 제자리 돌아오는 text',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/simple_text_animation_html_css.html',
  },
  {
    productName: 'rolling - 위로 스무스하게 올라가는 text',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/sliding_text_animation.html',
  },
  {
    productName: 'reveal bafffle 종이조각 모음(baffle.min.js)',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/text_reveal_animation_bafffle.html',
  },
  {
    productName: 'css만을 이용한 타자치는 느낌',
    category: 'text-effect',
    category2: 'animation',
    url: 'text-animate/typewiter_effect_css.html',
  },
  {
    productName: 'scrollTrigger - GSAP의 ScrollTrigger 플러그인을 사용하여 페이지 스크롤에 요소 표시',
    category: 'scroll-parallax',
    url: 'scroll-parallax/reveal_elements_on_page_scroll.html',
  },
  {
    productName: 'fullpage - 풀페이지 반응형 구간에 따라 풀페이지 죽이고 살리기',
    category: 'scroll-parallax',
    url: 'scroll-parallax/fullpage.js_destory_and_rebuild_base.html',
  },
  {
    productName: 'scrollTrigger - 스크롤 콘텐츠에 대한 고정 탐색 중지(js)',
    category: 'scroll-parallax',
    url: 'scroll-parallax/stop_fixed_navigations_covering_content_scroll.html',
  },
  {
    productName: 'header - 교차로 관찰자가 있는 고정 헤더(js)',
    category: 'scroll-parallax',
    category2: 'layout',
    url: 'scroll-parallax/fixed_header_intersection_observer.html',
  },
  {
    productName: 'scrollTrigger - 수평 미디어 스크롤러 생성',
    category: 'scroll-parallax',
    url: 'scroll-parallax/horizontal_media_scroller.html',
  },
  {
    productName: 'scrollTrigger - 스크롤 마지막에 리스트 추가 (lodash.min.js)',
    category: 'scroll-parallax',
    url: 'scroll-parallax/infnite_scrolling_throttled.html',
  },
  {
    productName: 'scrollTrigger - Typography 모션 효과(GSAP)',
    category: 'scroll-parallax',
    category2: 'text-effect',
    url: 'scroll-parallax/scrollTrigger_typography_animation_GSAP.html',
  },
  {
    productName: 'scrollTrigger - scroll 길이에 맞춰 SVG그리기',
    category: 'scroll-parallax',
    category2: 'icon-loading',
    url: 'scroll-parallax/svg_animation_onscroll.html',
  },
  {
    productName: 'parallax - 창의적인 시차 스크롤링(jarallax.js)',
    category: 'scroll-parallax',
    url: 'scroll-parallax/stunning_parallax_scrolling.html',
  },
  {
    productName: 'scrollTrigger - 스크롤시 고정되다가 다시 올라가는 애니메이션(scrollMagic)',
    category: 'scroll-parallax',
    category2: 'layout',
    url: 'scroll-parallax/scrollMagic_library_fixed_again_scrolling.html',
  },
  {
    productName: 'ScrollTrigger - GSAP 간단한 사용법',
    category: 'scroll-parallax',
    url: 'scroll-parallax/ScrollTrigger_GSAP_page_scroll.html',
  },
  {
    productName: 'image-more - 스크롤에 대한 무한한 이미지',
    category: 'scroll-parallax',
    category2: 'image',
    url: 'scroll-parallax/infinite_images_on_scroll.html',
  },
  {
    productName: 'scrollbar - 크리에이티브 페이지 스크롤 진행률 표시줄(js)',
    category: 'scroll-parallax',
    url: 'scroll-parallax/creative_page_scroll_progress_bar.html',
  },
  {
    productName: 'header - 스크롤시 헤더 탐색 위로 올리면 다시 노출(js)',
    category: 'scroll-parallax',
    category2: 'layout',
    url: 'scroll-parallax/reveal_nav_on_scroll.html',
  },
  {
    productName: 'header - 스크롤 시작하면 헤더 노출 맨위로 올라가면 없어짐(js)',
    category: 'scroll-parallax',
    category2: 'layout',
    url: 'scroll-parallax/hide_header_on_scroll_up_show.html',
  },
  {
    productName: 'header - 스크롤시 헤더 탐색 위로 올리면 다시 노출2(js)',
    category: 'scroll-parallax',
    category2: 'layout',
    url: 'scroll-parallax/hide_menu_on_scroll_sticky_navbar.html',
  },
  {
    productName: 'shadow - 스크롤시 그림자 노출여부',
    category: 'scroll-parallax',
    url: 'scroll-parallax/gradient_scroll_shadow.html',
  },
  {
    productName: 'progress - 페이지 스크롤시 원형 진행률 표시줄',
    category: 'scroll-parallax',
    url: 'scroll-parallax/page_scroll_percentage_circular_progress_bar.html',
  },
  {
    productName: 'scrollTrigger - 스크롤시 비디오 배경 fadeout',
    category: 'scroll-parallax',
    category2: 'background-border',
    url: 'scroll-parallax/fullscreen_video_background_fadeout_scroll.html',
  },
  {
    productName: 'parallax - 다른 이미지들 순차적적 움직임',
    category: 'scroll-parallax',
    category2: 'image',
    url: 'scroll-parallax/parallax_scrolling_effects_mountain.html',
  },
  {
    productName: 'scrollTrigger - 스크롤시 시차 물결 효과',
    category: 'scroll-parallax',
    category2: 'background-border',
    url: 'scroll-parallax/parallax_water_wave_scrolling_effect.html',
  },
  {
    productName: 'scrollTrigger - 스크롤시 기울어진 배경 평평하게 전환',
    category: 'scroll-parallax',
    category2: 'background-border',
    url: 'scroll-parallax/transform_effects_on_scroll_skewed.html',
  },
  {
    productName: 'scroll-behavior - 탭선택시, 스크롤시 부드러운 화면 스크롤(no js)',
    category: 'scroll-parallax',
    url: 'scroll-parallax/simple_sticky_navbar_smooth_scroll.html',
  },
  {
    productName: 'transform - 스크롤시 상단 동그라미 평평하게',
    category: 'scroll-parallax',
    category2: 'background-border',
    url: 'scroll-parallax/scroll_transform.html',
  },
  {
    productName: 'indicator - 스크롤 길이 체크',
    category: 'scroll-parallax',
    url: 'scroll-parallax/scroll_indicator.html',
  },
  {
    productName: 'scroll-snap - fullpage scroll',
    category: 'scroll-parallax',
    url: 'scroll-parallax/fullpage_scrolling_pure_css_scroll.html',
  },
  {
    productName: 'smooth scrolling - 스크롤시 부드럽게',
    category: 'scroll-parallax',
    url: 'scroll-parallax/add_smooth_scrolling_experience_vanilla.html',
  },
  {
    productName: 'parallax - 다음 장면이 이전 장면을 덮고 형태',
    category: 'scroll-parallax',
    url: 'scroll-parallax/create_a_parallax_scrolling_effects_using_only_htmlcss.html',
  },
  {
    productName: 'scrollTrigger - 스크롤 할수록 보여지는 크게 커짐',
    category: 'scroll-parallax',
    category2: 'icon-loading',
    url: 'scroll-parallax/image_transform_scroll_css3_vanilla.html',
  },
  {
    productName: 'parallax - 간단한 parallax scrolling(no js)',
    category: 'scroll-parallax',
    url: 'scroll-parallax/pure_css_parallax_scrolling_nojs.html',
  },
  {
    productName: 'sticky - 텍스트 상단고정 sticky scrolling',
    category: 'scroll-parallax',
    category2: 'layout',
    url: 'scroll-parallax/pure_css_sticky_scrolling_effects_nojs.html',
  },
  {
    productName: 'progress - scroll indicator 스크롤 크기만틈 변화',
    category: 'scroll-parallax',
    url: 'scroll-parallax/scroll_progress_indicator_with_mouse_follow.html',
  },
  {
    productName: 'sticky - 세로바 풀로 체워지고 텍스트 움직이는 scrolling(no js)',
    category: 'scroll-parallax',
    category2: 'background-border',
    url: 'scroll-parallax/scrolling_sticky_텍스트움직임.html',
  },
  {
    productName: 'scrollTrigger - scrolling 전체영역 한칸씩 덮기(gsap)',
    category: 'scroll-parallax',
    category2: 'layout',
    url: 'scroll-parallax/Smooth_scrolling_on_full_landing_sections.html',
  },
  {
    productName: '쿠키 동의',
    category: 'popup',
    url: 'popup/cookie_consent_banner.html',
  },
  {
    productName: 'backdrop and dialog animation',
    category: 'popup',
    url: 'popup/animating_dialog_and_backdrop.html',
  },
  {
    productName: 'HTML CSS(:target)를 사용한 팝업 창',
    category: 'popup',
    url: 'popup/popup_window_css_target_using.html',
  },
  {
    productName: '동일한 target 값으로 열고 닫기',
    category: 'popup',
    url: 'popup/custom_alert_popup_js.html',
  },
  {
    productName: '화살표 함수를 이용한 열고 닫기',
    category: 'popup',
    url: 'popup/popup-share_modal.html',
  },
  {
    productName: 'mousemove - 스크래치 카드',
    category: 'mouse-effect',
    url: 'mouse-effect/scratch_card_with_javascript.html',
  },
  {
    productName: 'active - Easiest 3D 버튼',
    category: 'mouse-effect',
    url: 'mouse-effect/easiest_3D_button.html',
  },
  {
    productName: 'mouse - 스와이프 방향을 감지하는 방법(Javascript)',
    category: 'mouse-effect',
    url: 'mouse-effect/how_to_detect_swipe_direction.html',
  },
  {
    productName: 'mouse - 터치 스크린을 감지(Javascript)',
    category: 'mouse-effect',
    url: 'mouse-effect/how_to_detect_touch_screen.html',
  },
  {
    productName: 'hover - 틸팅 카드(only-css)',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/tilting_card_hover.html',
  },
  {
    productName: 'click - Google 버튼 클릭 효과(js)',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/google_button_click_effect.html',
  },
  {
    productName: 'click - 외/내부 클릭 감지',
    category: 'mouse-effect',
    url: 'mouse-effect/detect_click_outside_inside.html',
  },
  {
    productName: 'hover - CSS 글라스 모피리즘',
    category: 'mouse-effect',
    url: 'mouse-effect/glassmorphism_button_hover.html',
  },
  {
    productName: 'hover - 호버에 테두리 그리기 CSS',
    category: 'mouse-effect',
    category2: 'background-border',
    url: 'mouse-effect/draw_border_hover_CSS_border_animation.html',
  },
  {
    productName: 'hover - 채워지는 배경의 모션이 통통튀는',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/awesome_hover_buttons.html',
  },
  {
    productName: 'hover - 양쪽으로 고무줄처럼 늘어나고 텍스트 점핑 GSAP',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/read_more_button.html',
  },
  {
    productName: 'hamburger - 라인이 fade 효과가 들어간',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/hamburger_button_toggle.html',
  },
  {
    productName: 'hamburger - 회전을 빨리하며 노멀한2',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/hamburger_pure_css_menu2.html',
  },
  {
    productName: 'hamburger - 회전을 빨리하며 노멀한',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/hamburger_pure_css_menu.html',
  },
  {
    productName: 'hamburger - 당기는듯한 다이나믹',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/hamburger_icon_css3_animation.html',
  },
  {
    productName: 'hover - 박스안을 원이 커지며 채워지는',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/circle_inside_box_grows_fills.html',
  },
  {
    productName: 'hamburger - 최신 애니메이션 메뉴 토글 버튼',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/toggle_button_modern_animated_menu.html',
  },
  {
    productName: 'mousemove - CSS 사용자 정의 속성을 동적으로 만들기',
    category: 'mouse-effect',
    url: 'mouse-effect/making_css_custom_properties_dynamic.html',
  },
  {
    productName: 'hover - 3D형태의 카드 이미지로 뒤집기',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/3D_flip_card_image_hover.html',
  },
  {
    productName: 'click - lottiefile을 이용한 축하 불꽃',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/add_amazing_animations_lottiefile.html',
  },
  {
    productName: 'hover - 박스 테두리 라인 선긋기',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/advanced_hover_animation.html',
  },
  {
    productName: 'hover - 텍스트 영역 안에서 움직이고 텍스트도 마우스 움직임에 따라 조금씩 움직임',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/animated_cursor_cool_link_hover_effect.html',
  },
  {
    productName: 'hover - 원 마우스 따라다니며 텍스트에 접근하면 박스처리',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/button_hover_effect_vanilla.html',
  },
  {
    productName: 'hover - box shadow이용 이중 테두리',
    category: 'mouse-effect',
    category2: 'background-border',
    url: 'mouse-effect/cool_css_box-shadow_hover.html',
  },
  {
    productName: 'click - tweenmax이용 전체화면 덥으며 메뉴 순차적 노출',
    category: 'navigation-list',
    category2: 'animation',
    url: 'mouse-effect/Creating_a_full_screen_navigation_gsap3.html',
  },
  {
    productName: 'hover - 텍스트 위/아래 박스 채워짐',
    category: 'navigation-list',
    category2: 'animation',
    url: 'mouse-effect/creative_menu_item_hover_html_css.html',
  },
  {
    productName: 'hover - 3D 겹쳐 있는 박스 계산 형태로 보임',
    category: 'navigation-list',
    category2: 'animation',
    url: 'mouse-effect/css3D_isometric_social_media_icon_hover.html',
  },
  {
    productName: 'hover - 버튼 테두리 라인치기',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/draw_border_hover.html',
  },
  {
    productName: 'hover - 눈알 따라다님 입움직임',
    category: 'mouse-effect',
    url: 'mouse-effect/eyes_follow_mouse_cursor_vanilla.html',
  },
  {
    productName: 'gradien glowing 그림자',
    category: 'background-border',
    category2: 'animation',
    url: 'mouse-effect/glowing_gradien_border_animation.html',
  },
  {
    productName: 'background up fill',
    category: 'background-border',
    category2: 'animation',
    url: 'mouse-effect/hover_background_color_up_fill.html',
  },
  {
    productName: '글씨 색 채움 이미지 부드럽게 노출 (tweenmax)',
    category: 'navigation-list',
    category2: 'animation',
    url: 'mouse-effect/hover-text_image_effect_gsap.html',
  },
  {
    productName: 'mouseMove - 마우스 좌우 움직임에 따라 이미지 보임',
    category: 'mouse-effect',
    category2: 'image',
    url: 'mouse-effect/image_comparision_slider_vanilla.html',
  },
  {
    productName: 'hover - 커서의 처음을 기준으로 채움',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/mouseenter_mouseout_background_fill.html',
  },
  {
    productName: 'pixel 형태로 채움',
    category: 'background-border',
    category2: 'animation',
    url: 'mouse-effect/pixel_button_hover_animation.html',
  },
  {
    productName: '회색 우에서좌로 자연스럽게 컬러보임',
    category: 'image',
    category2: 'animation',
    url: 'mouse-effect/simple_image_hover.html',
  },
  {
    productName: 'hover - 배경색 텍스트색 교차 change',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'mouse-effect/text_hover_back_color_change.html',
  },
  {
    productName: 'menu - PC메뉴를 복사하여 모바일용 메뉴 구현하기',
    category: 'navigation-list',
    url: 'menu-accordion/pc-clone_mobile_menu.html',
  },
  {
    productName: 'menu - 반응형 구간에서는 작동하지 않는 메뉴 애니메이션',
    category: 'navigation-list',
    url: 'menu-accordion/2depth_hover_submenu.html',
  },
  {
    productName: 'menu - 팝업 코너 메뉴',
    category: 'navigation-list',
    category2: 'animation',
    url: 'menu-accordion/pop_out_corner_menu.html',
  },
  {
    productName: 'menu - 사용자 지정 선택 메뉴 만들기',
    category: 'navigation-list',
    url: 'menu-accordion/custom_select_menu.html',
  },
  {
    productName: 'menu - hover한 버튼 박스형태로 따라다니기',
    category: 'navigation-list',
    category2: 'animation',
    url: 'menu-accordion/sns_buttons_interaction.html',
  },
  {
    productName: 'menu - 반응형 스틱네비게이션 바',
    category: 'navigation-list',
    category2: 'animation',
    url: 'menu-accordion/responsive_sticky_navigation_bar.html',
  },
  {
    productName: 'menu - gsap 사용한 최소한의 풀스크린 내비게이션',
    category: 'navigation-list',
    category2: 'animation',
    url: 'menu-accordion/fullscreen_navigation_gsap/index.html',
  },
  {
    productName: 'menu - 물흐르는듯한 끈적한 효과',
    category: 'navigation-list',
    category2: 'animation',
    url: 'menu-accordion/menu_social_icon_gooey_effects.html',
  },
  {
    productName: '선택된 메뉴 bar 따라다니기',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'menu-accordion/menu_indicator_animate.html',
  },
  {
    productName: 'ios 스타일 슬라이딩',
    category: 'layout',
    category2: 'animation',
    url: 'menu-accordion/menu_ios_style_sliding.html',
  },
  {
    productName: '리스트 순서 이동',
    category: 'mouse-effect',
    category2: 'navigation-list',
    url: 'menu-accordion/drag_drop_list_js_draggable.html',
  },
  {
    productName: 'menu - 검색 필드가 있는 응답형 드롭다운 메뉴 표시줄(only css)',
    category: 'navigation-list',
    url: 'menu-accordion/menu_dropdown_search_field_responsive.html',
  },
  {
    productName: '반응성 필터 가능 이미지 갤러리',
    category: 'navigation-list',
    url: 'menu-accordion/list_responsive_filterable_image_gallery.html',
  },
  {
    productName: 'list - JavaScript를 사용한 Todo List 목록',
    category: 'navigation-list',
    url: 'menu-accordion/todo_list_javaScript.html',
  },
  {
    productName: 'gsap를 이용한 svg gooey pagination2',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'menu-accordion/gooey_pagination2.html',
  },
  {
    productName: 'gsap를 이용한 gooey pagination',
    category: 'mouse-effect',
    category2: 'animation',
    url: 'menu-accordion/gooey_pagination.html',
  },
  {
    productName: 'menu - 반응형 상단고정 navbar 선택시 노출모션',
    category: 'navigation-list',
    url: 'menu-accordion/responsive_fixed_navigation_bar.html',
  },
  {
    productName: 'accordion - css, js 이용 faq스타일',
    category: 'navigation-list',
    url: 'menu-accordion/accordion_faq_es6.html',
  },
  {
    productName: 'tweenmax를 이용한 전체 화면이 움직임',
    category: 'layout',
    category2: 'animation',
    url: 'menu-accordion/minimal_navigation_html_css_jquery_gsap.html',
  },
  {
    productName: 'tweenmax를 이용한 메뉴 선택시 전체를 덮으면서 메뉴 노출',
    category: 'layout',
    category2: 'animation',
    url: 'menu-accordion/responsive_dropdown_navigation_menu.html',
  },
  {
    productName: 'ribbon - 박스 모서리 리본 모양을 만드는 방법',
    category: 'icon-loading',
    url: 'icon-loading/make_ribbon_shape.html',
  },
  {
    productName: '빛나는 그라데이션 로드 바 애니메이션',
    category: 'background-border',
    category2: 'animation',
    url: 'icon-loading/glowing_gradient_loading_bar_animation.html',
  },
  {
    productName: 'Rainy Cloud 애니메이션 효과',
    category: 'icon-loading',
    category2: 'animation',
    url: 'icon-loading/rainy_cloud_animation.html',
  },
  {
    productName: '--i, box-shadow을 활용한 흩어졌다 다시 모이는 애니메이션',
    category: 'icon-loading',
    category2: 'animation',
    url: 'icon-loading/circle_animation_hover_css.html',
  },
  {
    productName: '3D박스 그래프처럼 아래위로 움직임',
    category: 'icon-loading',
    category2: 'animation',
    url: 'icon-loading/cube_single_div_sinking.html',
  },
  {
    productName: 'bounce - 그림자와 함께 다이나믹하게 통통 튀는 느낌',
    category: 'icon-loading',
    category2: 'animation',
    url: 'icon-loading/bouncing_ball_animation.html',
  },
  {
    productName: '흔들흔들 종모양 알람',
    category: 'icon-loading',
    category2: 'animation',
    url: 'icon-loading/bell_notification.html',
  },
  {
    productName: 'cartoon - 반갈라진 계란 그리기',
    category: 'icon-loading',
    url: 'icon-loading/picture_egg.html',
  },
  {
    productName: 'cartoon - 지구를 도는 로켓 animation',
    category: 'icon-loading',
    category2: 'animation',
    url: 'icon-loading/rocket_circle_animation.html',
  },
  {
    productName: '박스가 구르는 애니메이션(only css)',
    category: 'icon-loading',
    category2: 'animation',
    url: 'icon-loading/box_rolls_animation.html',
  },
  {
    productName: '3D - 회전 이미지 큐브 애니메이션',
    category: 'icon-loading',
    category2: 'animation',
    url: 'icon-loading/3D_rotating_cube_animation.html',
  },
  {
    productName: 'cartoon - 뜨거워서 피어오르는 연기',
    category: 'icon-loading',
    category2: 'animation',
    url: 'icon-loading/animated_hot_smoke.html',
  },
  {
    productName: '하트 접기 애니메이션',
    category: 'icon-loading',
    category2: 'animation',
    url: 'icon-loading/heart_loading_animation.html',
  },
  // {
  //   productName: '',
  //   category: '',
  //   url: '',
  // },
]