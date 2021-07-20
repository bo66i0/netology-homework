import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class WatchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().utcOffset(this.props.watch.timezone * 60),
    };
  }

  componentDidMount() {
    this.clockInterval = setInterval(() => {
      this.setState({time: this.state.time.add(1, 'seconds')});
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    const { time } = this.state;
    const defaultRotateSeconds = 45;
    const defaultRotateHours = 180;
    const defaultRotateMinutes = -90;
    const rotateSeconds = time.seconds() * 360 / 60 + defaultRotateSeconds;
    const rotateMinutes = time.minutes() * 360 / 60 + defaultRotateMinutes;
    const rotateHours = (time.format('h') * 360 + (time.minutes() * 360 / 60)) / 12 + defaultRotateHours;

    return (
      <div className="watch-item">
        <div className="watch-item__name">{this.props.watch.name}</div>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 80 80">
          <g className="currentLayer"><title>Layer 1</title>
            <g id="XMLID_330_" className="">
              <circle className="st2" cx="37.599998474121094" cy="37.599998474121094" id="XMLID_378_" r="37.599998474121094"/>
              <circle className="st3" cx="37.49999237060547" cy="37.599998474121094" id="XMLID_377_" r="32.5"/>
              <path className="st4 watch-item-arrow watch-item-hours-arrow"
                    style={{transform: `rotate(${rotateHours}deg)`}}
                    d="M36.29999542236328,38.4999984741211 l0.30000000000000004,18.4 c0,0 1.4,1.8 2.4,0 l-0.4,-18.1 l-0.1,0 c-0.30000000000000004,0.1 -0.4,0.30000000000000004 -1.3,0.2 C36.899995422363276,38.9999984741211 36.59999542236328,38.7999984741211 36.29999542236328,38.4999984741211 L36.29999542236328,38.4999984741211 z" id="XMLID_374_"/>
              <path className="st4 watch-item-arrow watch-item-minutes-arrow"
                    style={{transform: `rotate(${rotateMinutes}deg)`}}
                    d="M39.29999542236328,38.4999984741211 l18.9,-0.1 c0,0 1.7000000000000002,-0.8 -0.1,-1.8 l-18.7,0.30000000000000004 c0,0 0.1,0.4 0.1,0.8 C39.499995422363284,37.9999984741211 39.29999542236328,38.4999984741211 39.29999542236328,38.4999984741211 z" id="XMLID_371_"/>
              <g className="watch-item-arrow watch-item-seconds-arrow" style={{transform: `rotate(${rotateSeconds}deg)`}}
                 id="XMLID_332_">
                <g id="XMLID_39_">
                  <g id="XMLID_42_">
                    <rect className="st2" height="22.5" id="XMLID_43_" transform="matrix(-0.7071,0.7071,-0.7071,-0.7071,156.3836,64.8282) " width="0.6000000238418579" x="64.35857944545174" y="97.86531179862655"/>
                  </g>
                  <circle className="st2" cx="41.399993896484375" cy="41.19999694824219" id="XMLID_41_" r="0.5"/>
                  <circle className="st2" cx="25.79999542236328" cy="25.599998474121094" id="XMLID_40_" r="0.6000000238418579"/>
                </g>
              </g>
              <circle className="st5" cx="37.599998474121094" cy="37.599998474121094" id="XMLID_331_" r="2.0999999046325684"/>
            </g>
          </g>
        </svg>
        <button className="close" onClick={() => this.props.onRemove(this.props.watch.id)}/>
      </div>
    );
  }

}

WatchItem.propTypes = {
  watch: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
  }).isRequired,
};

export default WatchItem;