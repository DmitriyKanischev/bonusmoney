import classNames from 'classnames';
import styles from './style.module.css';

type Props = {
  /** hex color */
  color?: string
  /** size in pixel */
  size?: number
} & React.HTMLAttributes<HTMLDivElement>

export default function Ring({ color = '#1a1a1a', size = 60, className, style }: Props) {
  const circles = [...Array(4)].map((_, index) => {
    return (
      <div
        key={index}
        style={{
          borderColor: `${color} transparent transparent transparent`,
          width: size * 0.8,
          height: size * 0.8,
          margin: size * 0.1,
          borderWidth: size * 0.1,
        }}
      ></div>
    )
  })

  return (
    <div className={classNames(styles['lds-ring'], className)} style={{ width: size, height: size, ...style }}>
      {circles}
    </div>
  )
}