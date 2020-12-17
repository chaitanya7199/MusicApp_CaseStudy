package com.project.filter;

import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.google.common.io.CharStreams;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;

@Component
public class ZuulLoggingPostFilter extends ZuulFilter {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	public boolean shouldFilter() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public Object run() throws ZuulException {
		HttpServletRequest request = RequestContext.getCurrentContext().getRequest();
		RequestContext ctx = RequestContext.getCurrentContext();
		// logger.info("\nresponse ----> {}", ctx.getResponseBody());
		 
		logger.info("\n=======================================================\n");
		logger.info("\nrequest ----> {} ::: request URI ----> {}", request, ctx.getResponseDataStream());
		logger.info("\n=======================================================\n");
		String data;
	    try {
			data = CharStreams.toString(new InputStreamReader(ctx.getResponseDataStream()));
			logger.info("data from char streams ---> {}", data);
			ctx.setResponseBody(data);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    
		return null;
	}

	@Override
	public String filterType() {
		// TODO Auto-generated method stub
		return "post";
	}

	@Override
	public int filterOrder() {
		// TODO Auto-generated method stub
		return 2;
	}

}

