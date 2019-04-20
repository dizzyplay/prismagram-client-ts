import React from "react";

export const Compass = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 5.999l-5.621 2.986c-.899-.104-1.806.191-2.474.859-.662.663-.95 1.561-.862 2.428l-3.043 5.728 5.724-3.042c.884.089 1.772-.205 2.432-.865.634-.634.969-1.524.859-2.473l2.985-5.621zm-5.97 7.22c-.689 0-1.25-.559-1.25-1.249-.001-.691.559-1.251 1.25-1.25.69 0 1.25.56 1.25 1.25-.001.689-.56 1.249-1.25 1.249z" />
  </svg>
);

export const HeartEmpty = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
  </svg>
);

export const HeartFull = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={"red"}
  >
    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
  </svg>
);

export const User = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
  </svg>
);

export const Comment = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z" />
  </svg>
);

export const Logo = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const DefaultUser = ({ size = 50 }) => (
  <svg
    height={size}
    viewBox="0 -66 512 512"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m462 0h-272c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h272c16.542969 0 30 13.457031 30 30v280c0 16.542969-13.457031 30-30 30h-412c-16.542969 0-30-13.457031-30-30v-280c0-16.542969 13.457031-30 30-30h60c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-60c-27.570312 0-50 22.429688-50 50v280c0 27.570312 22.429688 50 50 50h412c27.570312 0 50-22.429688 50-50v-280c0-27.570312-22.429688-50-50-50zm0 0" />
    <path d="m150 52c-52.933594 0-96 43.066406-96 96s43.066406 96 96 96 96-43.066406 96-96-43.066406-96-96-96zm-43.421875 158.320312c7.203125-17.316406 24.230469-28.9375 43.421875-28.9375s36.222656 11.621094 43.425781 28.9375c-12.320312 8.609376-27.289062 13.679688-43.425781 13.679688s-31.105469-5.070312-43.421875-13.679688zm25.226563-67.132812v-3.757812c0-10.035157 8.164062-18.195313 18.195312-18.195313s18.195312 8.160156 18.195312 18.195313v3.757812c0 10.03125-8.164062 18.195312-18.195312 18.195312s-18.195312-8.164062-18.195312-18.195312zm76.960937 52.945312c-6.773437-12.328124-17.242187-22.132812-29.753906-28.144531 5.71875-6.679687 9.183593-15.339843 9.183593-24.800781v-3.757812c0-21.0625-17.136718-38.195313-38.195312-38.195313s-38.195312 17.132813-38.195312 38.195313v3.757812c0 9.460938 3.464843 18.121094 9.183593 24.800781-12.511719 6.007813-22.980469 15.816407-29.753906 28.144531-10.761719-13.117187-17.234375-29.882812-17.234375-48.132812 0-41.90625 34.09375-76 76-76s76 34.09375 76 76c0 18.25-6.472656 35.015625-17.234375 48.132812zm0 0" />
    <path d="m304 200h144c5.523438 0 10-4.476562 10-10v-80c0-5.523438-4.476562-10-10-10h-144c-5.523438 0-10 4.476562-10 10v80c0 5.523438 4.476562 10 10 10zm10-80h124v60h-124zm0 0" />
    <path d="m304 240h144c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-144c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0" />
    <path d="m296.929688 277.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688s5.210938-1.070312 7.070312-2.929688c1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688s-5.210938 1.070312-7.070312 2.929688c-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312zm0 0" />
    <path d="m336.929688 262.929688c-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688s5.210938-1.070312 7.070312-2.929688c1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688s-5.210938 1.070312-7.070312 2.929688zm0 0" />
    <path d="m448 260h-64c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h64c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0" />
    <path d="m221.667969 274.082031c0-5.519531-4.480469-10-10-10h-123.335938c-5.519531 0-10 4.480469-10 10 0 5.523438 4.480469 10 10 10h123.335938c5.519531 0 10-4.476562 10-10zm0 0" />
    <path d="m104.332031 304.082031c-5.519531 0-10 4.480469-10 10 0 5.523438 4.480469 10 10 10h91.335938c5.519531 0 10-4.476562 10-10 0-5.519531-4.480469-10-10-10zm0 0" />
    <path d="m150 20c2.628906 0 5.210938-1.070312 7.070312-2.929688 1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688s-5.210938 1.070312-7.070312 2.929688c-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688zm0 0" />
  </svg>
);
