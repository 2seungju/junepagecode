import styled from 'styled-components';

const Bar = styled.div`
  width: ${p => (p.vertical ? '0.2px' : '90%')};
  opacity: 0.3;
  border: 1px dashed ${p => p.borderColor};
  height: ${p => p.vertical && '80vh'};
`;

export default Bar;
