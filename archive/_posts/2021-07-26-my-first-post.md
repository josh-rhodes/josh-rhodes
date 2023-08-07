---
layout: post
title:  "Big data & some (not so) little problems"
date:   2021-07-26 18:25:57 +0100
categories: jekyll update
---

Historians now have at their fingertips large datasets that allow us to ask questions that previously wouldn't have been possible or practical to pursue. We can text mine the 6 billion pages curated in the digital library of the <a rel="noreferrer noopener" href="https://www.hathitrust.org/" target="_blank">HathiTrust</a>. We can glimpse the lives of some 3.5 million individuals who lived in <a rel="noreferrer noopener" href="https://www.londonlives.org/" target="_blank">seventeenth- and eighteenth-century London</a>. Such large datasets are exciting and allow us to ask interesting and novel questions. But what about the things that we miss when dealing with such large amounts of digitised historical data? What compromises are we making in the hope that trends will be discernible from the noise? Or, that errors will 'average' out? I want to explore some of these issues through my latest research using <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a> (Integrated Census Microdata), a digitised version of the British censuses between 1851 and 1911 that contain records on over 180 million individuals.</p>

My work only focuses on a small fraction of this dataset: the 1851 census and English farmers as a particular subgroup of respondents, so that's who I'll talk about here. I was excited to use <a rel="noreferrer noopener" href="https://icem.data-archive.ac.uk/#step1" target="_blank">I-CeM</a> because theoretically I could examine all the extra information that the census recorded about farmers, including the size of their farms and the number of labourers they employed. These are important things to know because farm size and how many workers farmers employed (if any besides their own family) are <a rel="noreferrer noopener" href="https://www.jstor.org/stable/41475544" target="_blank">key measures</a> to track historical structural changes in agriculture.

The 1851 census is significant because it's the earliest date in Britain that we have data on farm sizes and farm employment on a national scale. In the census, farmers were to be returned in the following format:

<!-- wp:quote {"align":"left"} -->
<blockquote class="wp-block-quote has-text-align-left"><p>"Farmer of [317] acres, employing [12] labourers;" the actual number of acres, and of in and out-door labourers, on March 31st, being in all cases inserted.</p><cite><br><a rel="noreferrer noopener" href="https://books.google.co.uk/books?id=tIJPAQAAMAAJ&amp;dq=Census%20of%20England%20and%20Wales%2C%20Householder%E2%80%99s%20Schedule%2C%201851.&amp;pg=PR147#v=onepage&amp;q&amp;f=false" target="_blank">Census of Great Britain, 1851: Population Tables. I. Numbers of the Inhabitants. Report and Summary Tables.</a></cite></blockquote>

The census officials gave a few further examples of how different types of entries might be laid out:

<!-- wp:quote {"align":"left"} -->
<blockquote class="wp-block-quote has-text-align-left"><p>Farmer of 110 acres (employing 4 labourers and 1 boy).</p><p>Farmer of 41 acres (employing 1 in and 1 out-door labourer, with a boy).</p><p>Freeholder, Farmer of 10 acres (employing no labourer).</p><cite><a rel="noreferrer noopener" href="https://books.google.co.uk/books?id=tIJPAQAAMAAJ&amp;dq=Census%20of%20England%20and%20Wales%2C%20Householder%E2%80%99s%20Schedule%2C%201851.&amp;pg=PR147#v=onepage&amp;q&amp;f=false" target="_blank">Census of Great Britain, 1851: Population Tables. I. Numbers of the Inhabitants. Report and Summary Tables.</a></cite></blockquote>
<!-- /wp:quote -->

Even among these examples there is quite a lot of ambiguity, which is magnified in the original census documents by complex real-world arrangements and the idiosyncrasies of householders and census enumerators. I'll talk in a subsequent blog post about how these affect of understanding of nineteenth-century farming. For now, I want to focus on the types of things that we miss when only looking at the census through the lens of a <a rel="noreferrer noopener" href="https://en.wikipedia.org/wiki/Comma-separated_values" target="_blank">.CSV</a> file.


## Enriching our data on farmers
I've been thinking a lot more about the nature of digitised datasets and their relationship to the original historical records while I've been enriching the <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a> data on farmers. <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a> is largely based on transcriptions produced for genealogical purposes, and so it was understandably sufficient to transcribe just a person's occupation, leaving the extra details out. So what read 'Farmer of 220 acres (employing 11 labourers)' in the original census ends up being just 'Farmer' in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a>. Fortunately, many transcribers faithfully recorded the original (longer) entries, but large gaps remained. Many of the omissions have been infilled by a project at <a rel="noreferrer noopener" href="https://www.bbce.uk/" target="_blank">Cambridge University</a>, which has resulted in <a rel="noreferrer noopener" href="http://doi.org/10.5255/UKDA-SN-8600-2" target="_blank">BBCE</a> (British Business Census of Entrepreneurs), a new dataset of employers (not just farmers) in Britain, 1851-1911.</p>

But even with the additions made by <a rel="noreferrer noopener" href="http://doi.org/10.5255/UKDA-SN-8600-2" target="_blank">BBCE</a>, we're still missing farm size and employment details for 30,000+ farmers from 1851. It's for this group of farmers that I'm returning to the original census records to find the details on acreage and labour employment they supplied. Over the last few months I've checked original census records, otherwise known as <a rel="noreferrer noopener" href="https://uk1851census.com/introduction/" target="_blank">CEB</a>s (Census Enumerator Books), for about 15,000 farmers and updated 80% or 12,000 of them with new or revised information. You can see where and how many farmers' details I've updated in the map below:
<!-- /wp:paragraph -->

 <div id="map"> </div>
<script src="{{ site.baseurl }}/farmers_updated.geojson"></script>

<script src="{{ site.baseurl }}/script.js"></script>

Two things have struck me while doing this. The first is trivial. There are endless ways to mis-transcribe the word 'farmer'. Tanners, farriers, and joiners routinely masquerade as farmers in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a>.  Less common (but appearing more often than you might like to think) are individuals who were formerly employed in occupations entirely unrelated to farming. So you have former laundresses, former nurses, and former chemists all appearing as farmers. Other highlights include a 'suchman' (seedsman), 'ulied farmer' (retired farmer), and a 'srod farmder' (iron founder).

The second issue is much more important and harder to correct and concerns how the census and subsequent digitised versions have handled the entries for wives of farmers. Here I mean any and all female spouses of male farmers and not just a woman labelled as a 'farmer's wife', which was a term specific to the census and was intended to indicate that a wife worked on the farm.

The quality of data we have on farmers' wives has suffered because the delimited text files that contain the digitised censuses don't capture nuances in the arrangement of the records on the original census pages. This makes it hard to unpick certain types of errors or ambiguities using the digitised version, which only make much sense if you can see the layout of the original census enumerator book.


## The Ditto

The first problem is the different interpretation of ditto marks found throughout the original census documents. Census officials used either the abbreviation (Do.) or the now widely used double inverted commas (") to indicate an entry was the same as the one above. Some officials used either (Do.) or ("), while others used inverted commas to denote blank spaces.

Why are dittos so important to farmers' wives?

The census (and society more broadly) conceived households as being governed by a 'household head'. In a married couple, this was the husband. Only after the husband had died, did the widowed wife become the household head from the perspective of the census. Within a typical farming household, comprising a married couple, children and perhaps one or two servants, all members of the household were identified by their relationship to the household held. This is where the use of ditto is significant.

While married men would be recorded as a 'Farmer' with a given number of acres and employees, their wives' entries usually comprised at least one ditto mark. If they worked on the farm, the census stipulated that a spouse ought to be designated 'farmer's wife' as we can see for Jane Wilkinson from Lancashire in the image below. Happily, we find that <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a> accurately records Jane Wilkinson as a 'Farmer's wife'.

![](/images/2021-07-26-big-data/Isaac_Jane_Wilkinson_1851.jpg)
Isaac &amp; Jane Wilkinson from the Township of Mearley, Lancashire (1851); RecIDs in I-CeM 13375046 &amp; 13375047. John &amp; Mary Hanson from the Township of Mearley, Lancashire (1851); RecIDs in I-CeM 13375050 &amp; 13375051.

But if we turn to another farming couple on the same page of the census, something suspicious pops up. Mary Hanson is simply listed as a 'Farmer' in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a> but looking at the census page we can see that the enumerator has used two ditto marks under her husband John's entry of 'Farmer 44 acres'.

<p>Should this be read as simply dittoing 'farmer', or should we count Mary Hanson as a 'farmer's wife' as Jane Wilkinson above? Or is the repetition of the entire entry 'Farmer 44 acres' suggestive of a subtle distinction between how this couple may have managed or perceived the management of their farm compared to Isaac &amp; Jane Wilkinson? Is this akin to a farming partnership that you might find between other, more distant relatives in the census but which is indicated more clearly by the phrase 'joint farmer' or 'partner'?

Marriage was a partnership of sorts, and the formal label 'farmer's wife' may have encapsulated the same kind of partnership that I'm suggesting could be inferred when a husband's entire entry was dittoed. Maybe I'm just overthinking things. But the important point is that we have no way of distinguishing these possibly different categories in the digitised versions of the census. Without returning to the original CEBs, we can't begin to categorise accurately the 1000 wives of farmers who are just listed as 'farmers' in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a>.

<p>We might also be including women who weren't clearly identified as working on the farm in the census but appear to be in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a>. For example, Sarah Sparrow, who lived in Norfolk in 1851, is listed as 'farming' in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a>. But, if we look at her entry in the original census, we can see double inverted commas below her husband's entry. Elsewhere on the page, double inverted commas don't appear to mean 'ditto'. They seem to indicate blank or unused spaces. Where information is clearly repeated from the line above, such as where individuals were born, we find 'Do', indicating 'ditto', instead.


<!-- wp:image {"align":"center","id":66,"width":580,"height":96,"sizeSlug":"large"} -->
<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img src="http://www.joshuarhodes.com/wp-content/uploads/2020/07/Jeremiah_Sarah_Sparrow-1024x170.png" alt="" class="wp-image-66" width="580" height="96"/><figcaption>Jeremiah &amp; Sarah Sparrow from the parish of Tibenham, Norfolk (1851); RecIDs in I-CeM 6062617 &amp; 6062618.</figcaption></figure></div>
<!-- /wp:image -->

<!-- wp:heading -->
<h2>Data 'overspill'</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The second problem, which I'm calling 'overspill', is where male farmers' occupation entries have spilled over into the space reserved for their spouses. We can see in the image above how the enumerator for Jeremiah and Sarah Sparrow avoided this by leaving a line between the married couple's entries. But most didn't. This is why you'll find thousands of wives with occupations like '2 labourers' or 'employing 10 men' in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, Elizabeth White from Woodland, Devon is recorded as 'Farming 100 acres' in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a> but we can see from the CEB below that these details actually belonged to her husband's entry, which in full reads 'Perpetual Curate of Woodland Farming 100 acres'. Sarah's entry, which has been added in a later hand and is squeezed between her husband's and one of their servant's entries, reads 'Farmers wife'. This also means that her husband, John, is missing these 100 acres from his own entry in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":67,"width":289,"height":90,"sizeSlug":"large"} -->
<div class="wp-block-image"><figure class="alignleft size-large is-resized"><img src="http://www.joshuarhodes.com/wp-content/uploads/2020/07/John_Elizabeth_White.png" alt="" class="wp-image-67" width="289" height="90"/><figcaption>John &amp; Elizabeth White from the parish of Woodland, Devon (1851); RecIDs in I-CeM 6814248 &amp; 6814249.</figcaption></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph {"align":"left"} -->
<p class="has-text-align-left">In this example, the enumerator's large handwriting is probably to blame, as no doubt it was in many other instances. But was this always the case? Were there instances in which the entry of 'Farmer with [x] acres employing [x] labourers' was deliberately written across both husband and wife's occupations to indicate that this farm was managed and worked by both husband and wife? Should we be including these alongside those spouses who were more straightforwardly identified as a 'farmer's wife'? This is of course open to interpretation but digitised transcripts prevent us from examining these issues systematically across the dataset. We could of course identify some of these in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a> by looking for spouses like Elizabeth White whose occupations contain partial descriptions of a farm's acreage or workforce. But for all other farmers who have otherwise complete occupation strings in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a>, we have no way of knowing whether these were written in their own box, or across both husband and wife's boxes in the original census. What we're usually left with in <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a> is a full entry for the husband and a blank one for the wife.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Some concluding thoughts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>What can the subtle differences in the layout of nineteenth-century British census records tell us about big data more broadly and its place in historical research? I'm certainly not the first person to point out that we need <a rel="noreferrer noopener" href="https://www.tandfonline.com/doi/abs/10.2752/147800413X13515292098070" target="_blank">to think critically about the provenance of digital datasets</a>. It's also not simply the case that original historical records are uncomplicated 'authentic' versions that can be returned to fix the 'artificial' digital versions. Generations of historians have shown the importance of being critical of primary sources: thinking about their provenance, context, and purpose.</p>
<!-- /wp:paragraph -->


<p>What might catch us out with the census though is that it looks like it was born to be digitised. It's already tabulated. Surely fewer decisions need to be made about how and what to preserve than prose sources? What could go wrong? I hope I've shown that there is still quite a lot of room for interpreting the layout and contents of a tabulated source like the census. More importantly though, when we use <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a> we are hundreds of steps removed from the countless individual decisions that were made when the original documents were first transcribed. In the case of <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a>, the transcripts were made long before it was even conceived of as a project. So this isn't <a href="https://icem.data-archive.ac.uk/#step1">I-CeM</a>'s fault per se and I should add that it's a brilliant resource that has opened up areas of research which were impossible to tackle before.</p>


