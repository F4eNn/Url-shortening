'use client'
import { Link } from './Link'
import classes from './LinksContainer.module.scss'
import { useState, useEffect } from 'react'
import { LinkItems } from '@/models/interfaces'

export const LinksContainer = ({ cardItem }: any) => {
	const [card, setCard] = useState()
	const [deletedArr, setDeletedArr] = useState<LinkItems[]>([])

	
	

	return <ul className={classes.container}>{cardItem}</ul>
}
