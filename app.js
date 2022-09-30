$('#frmReferral').append('<iframe id="ifrRef" width="100%" height="100%" style="border:0;"></iframe>');
var resizeIframe = function(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    $(iframeAccess.thisIframe).fadeIn(500);
};
const startPolling = function() {
            if ($(iframeAccess.iframeHtml).find('.p-marketingbanner')) {
               console.log('react is ready');
               return; 
            }
            setTimeout(startPolling, 2000);
}
$(document).ready(function() {
    document.getElementById('ifrRef').src = '/ui/lms-learner-home/home?tab_page_id=-200300006';
    
    $('div[widgetid="15"]').hide();
    $('div[widgetid="21"]').css("margin","-15px");
    $("#ifrRef").on('load', function() {

        resizeIframe(iframeAccess.thisIframe);
        iframeAccess = {
            'thisIframe': this,
            'iframeHtml': $(this).contents(),
            '$frm': $(this)[0].contentWindow.$,
            'jsFire': $(this)[0].contentWindow,
            'frmSrc': this.src
        };

        $(iframeAccess.iframeHtml).find('.c-page-header, .srch-usrs, #ALSS_HTML_container').hide(0);
        $(iframeAccess.iframeHtml).find('#resultSummary, #dvButtons, #dvLInks').hide(0);
        $(iframeAccess.iframeHtml).find('.df-footer').hide(0);
        $(iframeAccess.iframeHtml).find('ul[ct="Breadcrumb"]').hide(0);
        $(iframeAccess.iframeHtml).find('.bottomPadding[id!=searchUserOuPopup_panelSelect_ouSearchControl_mainSearchPanel]').hide(0);
        $(iframeAccess.iframeHtml).find('#shResults_title, #btnSearchUser, #pg_lblResults').hide(0);
        $(iframeAccess.iframeHtml).find('.p-marketingbanner').html("");
        $(iframeAccess.iframeHtml).find('a[data-tag="lnkTitle"]').css("pointer-events","none");
        var bodyIfr = $(iframeAccess.iframeHtml).find('body')[0];
        bodyIfr.setAttribute("style","padding-top:5px !important;");


        setTimeout(startPolling, 2000);

    });
});
