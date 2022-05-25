import { memo } from 'react'
import { constants } from '~/components/Layouts'

function FooterLayout() {
    return (
        <constants.Footer style={{ textAlign: 'center', backgroundColor: '#f0e3e1' }}>
            Trading Book Final Project Created by _j4s0ntr
        </constants.Footer>
    )
}

export default memo(FooterLayout)
