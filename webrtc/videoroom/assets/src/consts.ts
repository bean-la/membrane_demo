export const MEDIA_CONSTRAINTS: MediaStreamConstraints = {
  audio: true,
  video: { width: 640, height: 360, frameRate: 24 },
};

export const SCREENSHARING_CONSTRAINTS: MediaStreamConstraints = {
  audio: false,
  video: { width: 1280, height: 720, frameRate: 5 },
};