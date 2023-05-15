
import classes from './Wrapper.module.scss'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className={classes.wrapper}>{children}</div>
}
