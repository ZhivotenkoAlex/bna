import { SVGProps } from 'react'

const CardIcon = ({ width = '21', height = '21', className }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 21 21"
    fill="none"
  >
    <path
      d="M17.1224 3.61536H4.06118C3.15506 3.61536 2.43669 4.29997 2.43669 5.15382L2.42853 14.3846C2.42853 15.2384 3.15506 15.923 4.06118 15.923H17.1224C18.0285 15.923 18.7551 15.2384 18.7551 14.3846V5.15382C18.7551 4.29997 18.0285 3.61536 17.1224 3.61536ZM17.1224 14.3846H4.06118V9.7692H17.1224V14.3846ZM17.1224 6.69228H4.06118V5.15382H17.1224V6.69228Z"
      fill="#3D3D3D"
    />
  </svg>
)

export default CardIcon
