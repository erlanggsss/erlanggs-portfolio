import user_interface from './behance.png';
import machine_learning from './ml.png';
import cloud_computing from './cloud-service.png';
import docker from './docker.svg';
import python from './python-icon.svg';
import flask from './flask.svg';
import gcp from './gcp.svg';
import colab from './colab.svg';
import next from './next.svg';
import node from './node.svg';
import postman from './postman.svg';
import tensorflow from './tensorflow.svg';
import webdev from './web.svg';
import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logos_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_interface,
    machine_learning,
    cloud_computing,
    docker,
    python,
    flask,
    gcp,
    colab,
    next,
    node,
    postman,
    tensorflow,
    webdev,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    git,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Primarry App',
        description: 'Cloud Computing',
        bgImage: '/work-1.png',
    },
    {
        title: 'FindUp App',
        description: 'Machine Learning',
        bgImage: '/work-2.png',
    },
    {
        title: 'Spotify Popular Song 2023',
        description: 'Machine Learning',
        bgImage: '/work-3.png',
    },
    {
        title: 'Diabetes Classification',
        description: 'Machine Learning',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.cloud_computing, title: 'Cloud Computing', description: 'Leveraging internet-based platforms to store data seamlessly...', link: '' },
    { icon: assets.machine_learning, title: 'Machine Learning', description: 'Developing AI models capable of learning and making predictions...', link: '' },
    { icon: assets.webdev, title: 'Web Development', description: 'Designing and building responsive and functional web applications...', link: '' },
    { icon: assets.user_interface, title: 'Design', description: 'Creating aesthetic interfaces and intuitive user experiences...', link: '' }
]


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, Node Js, Exspress Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 15+ projects' }
];

export const toolsData = [
    assets.vscode, assets.colab, assets.gcp, assets.git, assets.docker, assets.postman, assets.flask, assets.tensorflow
];
