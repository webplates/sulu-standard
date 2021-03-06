import * as environment from 'gulp-environments';

const sourceDir = 'app/Resources/assets';
const targetDir = 'web/assets';

export const config = {
    src: sourceDir,
    dest: targetDir,
    favicons: {
        src: sourceDir + '/img/logo.png',
        config: {
            appName: 'Sulu',
            appDescription: 'Sulu CMS',
            background: '#ffffff',
            path: '/',
            url: '/',
            display: 'standalone',
            orientation: 'portrait',
            version: 1.0,
            logging: false,
            online: false,
            html: 'app/Resources/views/favicons.html.twig'
        }
    },
    images: sourceDir + '/img/**/*.{png,svg,jpg,gif}',
    fonts: 'bower_components/font-awesome/fonts/**/*.{ttf,woff,woff2,eof,svg}',
    styles: {
        src: sourceDir + '/scss/style.scss',
        browsers: [
            'ie >= 10',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4.4',
            'bb >= 10'
        ]
    }
};

export const env = {
    dev: environment.development,
    prod: environment.production
};

export const defaultTask = 'build';
