import React from "react";
import style from "./CallsItem.module.css";
import { ReactComponent as OutgoingCallIcon } from "../../../../Usage/SortBarImages/SelectImages/OutgoingCallIcon.svg";
import { ReactComponent as MissedOutgoingCallIcon } from "../../../../Usage/SortBarImages/SelectImages/MissedCallIcon.svg";
import { ReactComponent as MissedIncomingCallIcon } from "../../../../Usage/SortBarImages/SelectImages/MissedIncomingCall.svg";
import { ReactComponent as IncomingCallIcon } from "../../../../Usage/SortBarImages/SelectImages/IncomingCallIcon.svg";
import { ReactComponent as GradeBadDots } from "../../../../Usage/SortBarImages/SelectImages/GradeBadDots.svg";
import { ReactComponent as GradeGoodDots } from "../../../../Usage/SortBarImages/SelectImages/GradeGoodDots.svg";
import { ReactComponent as GradePerfectDots } from "../../../../Usage/SortBarImages/SelectImages/GradePerfectDots.svg";
import { ReactComponent as GradeBad } from "../../../../Usage/SortBarImages/SelectImages/GradeBad.svg";
import { ReactComponent as GradeGood } from "../../../../Usage/SortBarImages/SelectImages/GradeGood.svg";
import { ReactComponent as GradePerfect } from "../../../../Usage/SortBarImages/SelectImages/GradePerfect.svg";

const CallsItem = (props) => {

    const callType = () => {
        if (props.in_out === 1 && props.status === "Дозвонился") {
            return <IncomingCallIcon/>
        }
        if (props.in_out === 1 && props.status === "Не дозвонился") {
            return <MissedIncomingCallIcon/>
        }
        if (props.in_out === 0 && props.status === "Дозвонился") {
            return <OutgoingCallIcon/>
        }
        return <MissedOutgoingCallIcon/>
    }

  return (
    <div className={style.CallsItem}>
      <div className={style.CallType}>
          {callType()}
      </div>
      <div className={style.CallTime}>{props.date}</div>
      <div className={style.CallEmployer}>
        <img src={props.person_avatar} />
      </div>
      <div className={style.CallNumber}>
        <span>
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
      <div className={style.CallRecord}></div>
      <div className={style.CallDuration}>
        {props.call_duration === 0 ? null : props.call_duration}
      </div>
    </div>
  );
};

export default CallsItem;
