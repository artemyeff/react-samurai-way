export type GetTrackDetailsOutputData = {
    id: string;
    attributes: {
      title: string;
      lyrics: string | null;
    };
  };

export type GetTrackDetailsOutput = {data: GetTrackDetailsOutputData}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch(
        `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/` + trackId,
        {
          headers: {
            // "api-key": "a77cd43f-21a6-499e-bf99-49fd6c4c3fe5",
          },
        },
      )
        .then((res) => res.json())

    return promise
}

type AttachmentsDto = {
    url: string;
};
  
type TrackListItemOutputAttributes = {
    title: string;
    attachments: Array<AttachmentsDto>;
};
  
export type TrackListItemOutput = {
    id: string;
    attributes: TrackListItemOutputAttributes;
};

export type GetTrackOutput = {
    data:Array<TrackListItemOutput>
}

export const getTracks = () => {
    const promise: Promise<GetTrackOutput> =  fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
        headers: {
          // "api-key": "a77cd43f-21a6-499e-bf99-49fd6c4c3fe5",
        },
      })
        .then((res) => res.json())

    return promise
}