import React, {type FC} from 'react';
import './style'
import styled from "styled-components";

export interface LoadingProps {
  lColor: string;
  rColor: string;
}

const Loading: FC<LoadingProps> = ({lColor='#fff', rColor='#000'}) => {
  const LoadingStyles = styled.div`
    &::before {
      background-color: ${lColor};
    }
    &::after {
      background-color: ${rColor};
    }
  `
  return (
    <div className="loading">
      {
        /*黑白两球想象成一对 */
        Array.from(Array(36), (e, i) => {
          return <LoadingStyles
            className={`dot`}
          ></LoadingStyles>
        })

      }
    </div>
  )
};

export default Loading;
