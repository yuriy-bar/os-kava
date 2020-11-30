// // const clock = document.querySelector('.clock');
// // setInterval( () => clock.innerText = new Date().toLocaleTimeString(), 1000 )

// // const clock = document.querySelector('.clock');
// // setInterval( () => clock.innerText = new Date().toLocaleTimeString(), 1000  )

// jQuery(document).ready(function()
// {
// 	jQuery(window).scroll(function()
// 	{
// 		const scroll_top = jQuery(window).scrollTop();
		
// 		if(scroll_top >= 300)
// 		{
// 			jQuery('[data-btn="toTop"]').addClass('to-top--fixed');
// 		}
// 		else
// 		{
// 			jQuery('[data-btn="toTop"]').removeClass('to-top--fixed');
// 		}
// 	});
	
// 	jQuery('[data-btn="toTop"]').on('click', function(e)
// 	{
// 		e.preventDefault();
// 		jQuery('html, body').animate({scrollTop: 0}, 300);
//     }
//     );
// });