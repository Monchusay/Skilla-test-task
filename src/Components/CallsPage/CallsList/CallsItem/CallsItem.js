import React, { useState, useRef, useEffect } from "react";
import style from "./CallsItem.module.css";
import { ReactComponent as OutgoingCallIcon } from "../../../../Usage/SortBarImages/SelectImages/OutgoingCallIcon.svg";
import { ReactComponent as MissedOutgoingCallIcon } from "../../../../Usage/SortBarImages/SelectImages/MissedCallIcon.svg";
import { ReactComponent as MissedIncomingCallIcon } from "../../../../Usage/SortBarImages/SelectImages/MissedIncomingCall.svg";
import { ReactComponent as IncomingCallIcon } from "../../../../Usage/SortBarImages/SelectImages/IncomingCallIcon.svg";
import { ReactComponent as GradeGoodDots } from "../../../../Usage/SortBarImages/SelectImages/GradeGoodDots.svg";
import { ReactComponent as GradePerfectDots } from "../../../../Usage/SortBarImages/SelectImages/GradePerfectDots.svg";
import { ReactComponent as GradeGood } from "../../../../Usage/SortBarImages/SelectImages/GradeGood.svg";
import { ReactComponent as GradePerfect } from "../../../../Usage/SortBarImages/SelectImages/GradePerfect.svg";
import { ReactComponent as DownloadRecordIcon } from "../../../../Usage/SortBarImages/SelectImages/DownloadRecordIcon.svg";
import { ReactComponent as DownloadedRecordIcon } from "../../../../Usage/NavBarImages/OrdersIcon.svg";
import { ReactComponent as PlayRecordIcon } from "../../../../Usage/SortBarImages/SelectImages/PlayRecordIcon.svg";
import { ReactComponent as PauseRecordIcon } from "../../../../Usage/SortBarImages/SelectImages/PauseRecordIcon.svg";
import axios from "axios";

const CallsItem = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [duration, setDuration] = useState(0);

  const recordPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const callType = () => {
    if (props.in_out === 1 && props.status === "Дозвонился") {
      return <IncomingCallIcon />;
    }
    if (props.in_out === 1 && props.status === "Не дозвонился") {
      return <MissedIncomingCallIcon />;
    }
    if (props.in_out === 0 && props.status === "Дозвонился") {
      return <OutgoingCallIcon />;
    }
    return <MissedOutgoingCallIcon />;
  };

  const onLoadedMetaData = () => {
    const seconds = Math.floor(recordPlayer.current?.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  };
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnSeconds}`;
  };
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      recordPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      recordPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };
  const toggleDownload = () => {
    setIsDownloaded(!isDownloaded);
    axios
      .post(
        `https://api.skilla.ru/mango/getRecord?record=${props.record}&partnership_id=${props.partnership_id}`,
        null,
        {
          headers: {
            Authorization: "Bearer testtoken",
          },
        }
      )
      .then((response) => {

      });
  };

  const whilePlaying = () => {
    progressBar.current.value = recordPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  const changeRange = () => {
    recordPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
  };
  return (
    <div className={style.CallsItem}>
      <div className={style.CallType}>{callType()}</div>
      <div className={style.CallTime}>{props.date}</div>
      <div className={style.CallEmployer}>
        <img src={props.person_avatar} />
      </div>
      <div className={style.CallNumber}>
        <span className={style.CallNumberContact}>
          {props.contact_company} {props.contact_name}
        </span>
        <span>{props.from_number}</span>
      </div>
      <div className={style.CallSource}>
        <span>{props.source}</span>
      </div>
      <div className={style.CallGrade}>
        {props.errors.length === 0
          ? [<GradePerfectDots />, <GradePerfect className={style.GradeIcon} />]
          : props.errors.length === 1
          ? [<GradeGoodDots />, <GradeGood className={style.GradeIcon} />]
          : null}
      </div>
      <div className={style.CallRecord}>
        {props.record === "" ? null : (
          <div className={style.RecordPlayer}>
            <audio
              onLoadedMetadata={onLoadedMetaData}
              ref={recordPlayer}
              src={require("../../../../Usage/SortBarImages/SelectImages/RandomSong.mp3")}
              preload="Metadata"
            />
            <div>
              {calculateTime(duration)}
            </div>
            <button
              onClick={togglePlayPause}
              className={style.RecordIconContainer}
            >
              {isPlaying ? <PauseRecordIcon /> : <PlayRecordIcon />}
            </button>
            <div>
              <input
                onLoadedMetadata={onLoadedMetaData}
                type="range"
                defaultValue="0"
                className={style.RecordSlider}
                ref={progressBar}
                onChange={changeRange}
              />
            </div>
            <button
              onClick={toggleDownload}
              className={style.RecordIconContainer}
            >
              {isDownloaded ? (
                <DownloadedRecordIcon className={style.RecordIcon} />
              ) : (
                <DownloadRecordIcon />
              )}
            </button>
          </div>
        )}
      </div>
      <div className={style.CallDuration}>
        {props.call_duration === 0 ? null : props.call_duration}
      </div>
    </div>
  );
};

export default CallsItem;
